import {
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_FAILURE,
    SET_QUERY_STRING
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
        type: FETCH_VIDEOS_FAILURE,
        payload: error
    }
}

const fetchVideos = (youtubeService) => (keyword) => (dispatch) => { 
    dispatch(videosRequested())
    youtubeService.fetchVideos(keyword)
        .then(data => dispatch(videosLoaded(data)))
        .catch(err => dispatch(videosLoadingFailed(err)))
} 

const searchStringSettled = (query) => { 
    return {
        type : SET_QUERY_STRING,
        payload: query
    }
}

export { 
    fetchVideos,
    searchStringSettled
}