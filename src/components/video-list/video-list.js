import React from 'react'
import VideoListItem from '../video-list-item'
import { v4 as uuidv4 } from 'uuid';
import './video-list.scss'

const VideoList = (props) => {
    const { items } = props;
    return (
        <div className="video-list">
            {/* <div className="container"> */}
                {items.map(item => <VideoListItem key={uuidv4()} item={item} />)}
            {/* </div> */}
        </div>
    )
}

export default VideoList;