import React, { Component } from 'react'
import VideoList from '../video-list'
import Loader from '../loader'
import { useSelector } from 'react-redux'

import './video-container.scss'

const VideoContainer = () => { 
    // render() { 
        // const isLoading = useSelector(state => state.videoList.isLoading)
        return (
         <VideoList />
        )
    //}
}

export default VideoContainer;