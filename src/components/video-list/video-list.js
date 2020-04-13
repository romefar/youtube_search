import React from 'react'
import VideoListItem from '../video-list-item'

import './video-list.scss'

const VideoList = (props) => {
    const { items } = props;
    return (
        <div className="video-list">
            <div className="container">
                {items.map(item => <VideoListItem key={item.videoData.videoId} item={item} />)}
            </div>
        </div>
    )
}

export default VideoList;