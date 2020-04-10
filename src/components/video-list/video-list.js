import React from 'react'
import VideoListItem from '../video-list-item'

import './video-list.scss'

const VideoList = (props) => {
    // const { videos } = props;
    // videos.map(item => <VideoListItem video={item}/>)
    return (
        <div className="video-list">
            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
            <VideoListItem />
        </div>
    )
}

export default VideoList;