import {
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_FAILURE
} from './actionTypes'

const videosRequested = () => {
    return {
        type: FETCH_VIDEOS_REQUEST
    }
}

const videosLoaded = (videos) => {
    return {
        type: FETCH_VIDEOS_SUCCESS,
        payload: videos
    }
}

const videosLoadingFailed = (error) => {
    return {
        type: FETCH_VIDEOS_SUCCESS,
        payload: error
    }
}

// const fetchVideos = () => 

export default { 
    videosRequested,
    videosLoaded,
    videosLoadingFailed
}