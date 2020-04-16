import React from 'react'

import VideoListItem from '../video-list-item'

import './video-list.scss'

const VideoList = (props) => {
    const { items } = props;
    return (
        <div className="video-list">
            {items.map(item => <VideoListItem key={item.key} item={item} />)}
        </div>
    )
}

export default VideoList;