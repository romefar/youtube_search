import { viewCountFormatter, dateFormatter, ResizeController, titleFormatter } from '../utils/' 
import { v4 as uuidv4 } from 'uuid'

class YouTubeService {

    #rootRouteAPI = "https://www.googleapis.com/youtube/v3"
    #searchRouteAPI = `${this.#rootRouteAPI}/search?`
    #videoDataRouteAPI = `${this.#rootRouteAPI}/videos?`
    #channelDataRouteAPI = `${this.#rootRouteAPI}/channels?`
    #openChannelURL = "https://www.youtube.com/channel/"
    #openVideoURl = "https://www.youtube.com/watch?v="
    #apiKey = process.env.REACT_APP_YOUTUBE_DATA_API

    #nextPageToken = null
    #maxResultsPerPage = 0
    #prevRequestString = ""

    _fetch = async (url) => {
        const res = await fetch(`${url}`)
        if (!res.ok) throw new Error(`Couldn't fetch data from the server. Response status ${res.status}`)
        const data = await res.json()
        return data
    }

    fetchVideos = async (keyword) => {
        this.#maxResultsPerPage = ResizeController.handleResize(this.#nextPageToken && this.#prevRequestString === keyword)
        this.#prevRequestString = keyword
        const url = this._getVideosListByKeywordURL(keyword)
        const data = await this._fetch(`${this.#searchRouteAPI}${url}`)

        // set next page token 
        this.#nextPageToken = data.nextPageToken || null

        let videoIds = this._getVideosIds(data.items)
        const videoStatistics = await this._fetchVideosStatisticsByIds(videoIds)

        let channelsIds = this._getChannelsIds(data.items)
        const channelData = await this._fetchChannelsStatisticsByIds(channelsIds)

        data.items = data.items.map((item, i) => {
            item.statistics = videoStatistics.items[i].statistics
            channelData.items.forEach(channelItem => {
                if(item.snippet.channelId === channelItem.id) { 
                    item.channelData = channelItem
                }
            })
            return item
        })
        
        if(this.#nextPageToken === null || !data.items.length) return []
        return this._transformYouTubeItemData(data)
    }

    _transformYouTubeItemData = ({ items }) => { 
        return items.map(item => {
            const videoData = this._transformVideoData(item)
            const channelData = this._transformChannelData(item)
            return {
                key : uuidv4(),
                channelData,
                videoData
            }
        })
    } 

    _transformChannelData = ({ channelData }) => { 
        let { id:channelId } = channelData
        let { country, description: channelDescription, title:channelTitle, thumbnails:channelThumbnails, publishedAt:createdAt } = channelData.snippet
        let { subscriberCount, videoCount, viewCount:channelTotalViewsCount, hiddenSubscriberCount:isSubscribersCountHidden } = channelData.statistics
        const channelURL = `${this.#openChannelURL}${channelId}`

        createdAt = dateFormatter(createdAt, "LL")

        if(!isSubscribersCountHidden) { 
            subscriberCount = viewCountFormatter(subscriberCount)
            videoCount = viewCountFormatter(videoCount)
            channelTotalViewsCount = viewCountFormatter(channelTotalViewsCount, true)
        } else { 
            subscriberCount = 0
        }

        return { 
            channelId,
            channelTitle,
            channelDescription,
            channelThumbnails,
            createdAt,
            subscriberCount,
            videoCount,
            channelTotalViewsCount,
            isSubscribersCountHidden,
            country,
            channelURL
        }

    }

    _transformVideoData = (videoData) => {
        let { videoId } = videoData.id
        let { description:videoDescription, publishedAt, thumbnails:videoThumbnails, title:videoTitle } = videoData.snippet
        let { viewCount:videoViewsCount, commentCount, dislikeCount, favoriteCount, likeCount } = videoData.statistics
        const videoURL = `${this.#openVideoURl}${videoId}`

        publishedAt = dateFormatter(publishedAt)
        videoViewsCount = viewCountFormatter(videoViewsCount)
        commentCount = viewCountFormatter(commentCount, true)
        dislikeCount = dislikeCount ? viewCountFormatter(dislikeCount) : 0
        favoriteCount = viewCountFormatter(favoriteCount, true)
        likeCount = likeCount ? viewCountFormatter(likeCount) : 0
        videoTitle = titleFormatter(videoTitle)

        return {
            videoId,
            videoTitle,
            videoDescription,
            publishedAt,
            videoViewsCount,
            commentCount,
            dislikeCount,
            favoriteCount,
            likeCount,
            videoThumbnails,
            videoURL
        }
    }

    _getChannelsIds = (channels) => { 
        return channels.map(item => item.snippet.channelId).join(',')
    }

    _getVideosIds = (videos) => {
        return videos.map(item => item.id.videoId).join(',')
    }

    _fetchChannelsStatisticsByIds = async (ids) => { 
        const url = this._getChannelsStatisticsURL(ids)
        const data = await this._fetch(`${this.#channelDataRouteAPI}${url}`)
        return data
    }

    _fetchVideosStatisticsByIds = async (ids) => {
        const url = this._getVideosStatisticsURL(ids)
        const data = await this._fetch(`${this.#videoDataRouteAPI}${url}`)
        return data
    }

    _getVideosListByKeywordURL = (keyword) => {
        let url = {
            part: "snippet",
            maxResults: this.#maxResultsPerPage,
            q: keyword,
            type: "video",
            order: "relevance",
            fields: "nextPageToken,pageInfo,items(id,snippet)",
            key: this.#apiKey
        }
        if (this.#nextPageToken !== null) url.pageToken = this.#nextPageToken;
        return this._transformObjectToURL(url)
    }

    _getVideosStatisticsURL = (ids) => {
        const url = {
            part: "statistics",
            id: ids,
            fields: "items(id,statistics)",
            key: this.#apiKey
        }
        return this._transformObjectToURL(url)
    }

    _getChannelsStatisticsURL = (ids) => {
        const url = {
            part: "snippet,statistics",
            id: ids,
            fields: "items",
            key: this.#apiKey
        }
        return this._transformObjectToURL(url)
    }

    _transformObjectToURL = (obj) => {
        let res = [];
        for (let [key, value] of Object.entries(obj)) {
            res.push(`&${key}=${encodeURIComponent(value)}`);
        }
        return res.join("").slice(1)
    }
}

const getYouTubeService = (() => {
    
    let instance = null

    return () => {
        if(instance) {
            return instance
        } else {
            instance = new YouTubeService()
            return instance
        }
    }
})()

export default getYouTubeService