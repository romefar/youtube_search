import React from 'react'
import './video-list-item.scss'

const VideoListItem = (props) => { 

    const { videoThumbnails: { medium : { url:videoThumbnailURL } }, videoTitle, videoViewsCount, publishedAt } = props.item.videoData
    const { channelThumbnails: { default : { url : channelThumbnailURL} }, channelTitle } = props.item.channelData
 
    return(
        <div className="card">
            <img className="card__video-thumbnail" src={videoThumbnailURL} alt={videoTitle}/>
            <div className="card__video-info-container">
                <div className="card__channel-thumbnail-container">
                    <img className="card__channel-thumbnail"  src={channelThumbnailURL} alt={channelTitle}/>
                </div>
                <div className="card__description-container">
                    <h3 className="card__video-title">{videoTitle}</h3>
                    <div className="card__channel-name">{channelTitle}</div>
                    <div className="card__video-stat">
                        <span className="card__video-views-count">{videoViewsCount} views</span>
                        <span className="card__video-upload-date">{publishedAt}</span>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default VideoListItem;