import apiKey from './api-config';

 export default class YouTubeService {

    _rootRouteAPI = "https://www.googleapis.com/youtube/v3"
    _searchRouteAPI = `${this._rootRouteAPI}/search?`
    _videoDataRouteAPI = `${this._rootRouteAPI}/videos?`
    _channelDataRouteAPI = `${this._rootRouteAPI}/channels?`

    _nextPageToken = null
    _maxResultsPerPage = 2

    _fetch = async (url) => {
        const res = await fetch(`${url}`)
        if (!res.ok) throw new Error(`Couldn't fetch data from the server. Response status ${res.status}`)
        const data = await res.json()
        return data
    }

    fetchVideos = async (keyword) => {
        const url = this._getVideosListByKeywordURL(keyword)
        const data = await this._fetch(`${this._searchRouteAPI}${url}`)

        // set next page token 
        this._nextPageToken = data.nextPageToken ? data.nextPageToken : null

        let videoIds = this._getVideosIds(data.items)
        const videoStatistics = await this._fetchVideosStatisticsByIds(videoIds)

        let channelsIds = this.__getChannelsIds(data.items)
        const channelData = this._fetchChannelsStatisticsByIds(channelsIds)

        data.items.forEach((item, i) => {
            item.statistics = videoStatistics.items[i].statistics
            item.channelData = channelData.item[i]
        })
        return data
    }

    _getChannelsIds = (channels) => { 
        return channels.map(item => item.snippet.channelId).join(',')
    }

    _getVideosIds = (videos) => {
        return videos.map(item => item.id.videoId).join(',')
    }

    _fetchChannelsStatisticsByIds = async (ids) => { 
        const url = this._getChannelsStatisticsURL(ids)
        const data = await this._fetch(`${this._channelDataRouteAPI}${url}`)
        return data
    }

    _fetchVideosStatisticsByIds = async (ids) => {
        const url = this._getVideosStatisticsURL(ids)
        const data = await this._fetch(`${this._videoDataRouteAPI}${url}`)
        return data
    }

    _getVideosListByKeywordURL = (keyword) => {
        let url = {
            part: "snippet",
            maxResults: this._maxResultsPerPage,
            q: keyword,
            type: "video",
            order: "relevance",
            fields: "nextPageToken,pageInfo,items(id,snippet)",
            key: apiKey
        }
        if (this._nextPageToken !== null) url.pageToken = this._nextPageToken;
        return this._transformObjectToURL(url)
    }

    _getVideosStatisticsURL = (ids) => {
        const url = {
            part: "statistics",
            id: ids,
            fields: "items(id,statistics)",
            key: apiKey
        }
        return this._transformObjectToURL(url)
    }

    _getChannelsStatisticsURL = (ids) => {
        const url = {
            part: "snippet,statistics",
            id: ids,
            fields: "items",
            key: apiKey
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