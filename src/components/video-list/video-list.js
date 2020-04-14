import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import VideoListItem from '../video-list-item'

import './video-list.scss'

const VideoList = (props) => {
    const { items } = props;
    return (
        <div className="video-list">
            {items.map(item => <VideoListItem key={uuidv4()} item={item} />)}
        </div>
    )
}

export default VideoList;