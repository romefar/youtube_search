import getYouTubeService from '../../services/youtube-service'
import {
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_FAILURE,
    VIDEOS_LIST_CLEARED,
} from './video-list-action-types'


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
        type: FETCH_VIDEOS_FAILURE,
        payload: error
    }
}

const fetchVideos = (keyword) => (dispatch) => { 
    dispatch(videosRequested())
    getYouTubeService().fetchVideos(keyword)
        .then(data => dispatch(videosLoaded(data)))
        .catch(err => dispatch(videosLoadingFailed(err)))
} 

const videosListRestored = () => { 
    return { 
        type: VIDEOS_LIST_CLEARED
    }
}

export { 
    fetchVideos,
    videosListRestored
}