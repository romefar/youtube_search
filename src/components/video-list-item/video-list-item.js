import React from 'react'
import './video-list-item.scss'

const VideoListItem = (props) => { 
    const url = "https://i.ytimg.com/vi/gDbCpFKgWps/mqdefault.jpg"
    const channelURL = "https://yt3.ggpht.com/a/AATXAJxw_lG_7DJIC6HyxGtijAHL_LVlE-y1v3d5DQ=s88-c-k-c0xffffffff-no-rj-mo"
    const date = "8 years ago"
    return(
        <div className="card">
            <img className="card__video-thumbnail" src={url} alt="sss"/>
            <div className="card__video-info-container">
                <div className="card__channel-thumbnail-container">
                    <img className="card__channel-thumbnail"  src={channelURL} alt="sadasd"/>
                </div>
                <div className="card__description-container">
                    <h3 className="card__video-title">dsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddds</h3>
                    <div className="card__channel-name">sads</div>
                    <div className="card__video-stat">
                        <span className="card__video-views-count">9999 views</span>
                        <span className="card__video-upload-date">{date}</span>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default VideoListItem;