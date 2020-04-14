import React from 'react'

import './video-list-item.scss'

const VideoListItem = (props) => { 

    const { videoThumbnails: { medium : { url:videoThumbnailURL } }, videoTitle, videoViewsCount, publishedAt, videoURL } = props.item.videoData
    const { channelThumbnails: { default : { url : channelThumbnailURL} }, channelTitle, channelURL } = props.item.channelData
 
    return(
        <div className="card">
            <a className="card__video-link" target="blank" href={videoURL} alt={videoTitle} title={videoTitle}>
                <img className="card__video-thumbnail" src={videoThumbnailURL} alt={videoTitle} />
            </a>
            <div className="card__video-info-container">
                <div className="card__channel-thumbnail-container">
                    <a className="card__channel-link" href={channelURL} target="blank" alt={channelTitle} title={channelTitle}>
                        <img className="card__channel-thumbnail" src={channelThumbnailURL} alt={channelTitle} />
                    </a>
                </div>
                <div className="card__description-container">
                    <a className="card__video-link" target="blank" href={videoURL} alt={videoTitle} title={videoTitle}>
                        <h3 className="card__video-title">{videoTitle}</h3>
                    </a>
                    <div className="card__channel-name">
                        <a className="card__channel-link" href={channelURL} target="blank" alt={channelTitle} title={channelTitle}>
                            {channelTitle}
                        </a>
                    </div>
                    <a className="card__video-link" target="blank" href={videoURL} alt={videoTitle} title={videoTitle}>
                        <div className="card__video-stat">
                            <span className="card__video-views-count">{videoViewsCount} views</span>
                            <span className="card__video-upload-date">{publishedAt}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>    
    )
}

export default VideoListItem;