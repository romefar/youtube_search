import {
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_FAILURE
} from '../actions/actionTypes'

const initialState = {
    items: [],
    isLoading: true, 
    hasError : null
} 

const videoListReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_VIDEOS_REQUEST: 
            return {
                items: [],
                isLoading: true,
                hasError: null
            }
        case FETCH_VIDEOS_SUCCESS: 
            return { 
                items: action.payload,
                isLoading: false,
                hasError: null
            }
        case FETCH_VIDEOS_FAILURE:
            return { 
                items: [],
                isLoading: false,
                hasError: action.payload
            }
        default: 
            return state;
    }
}

export default videoListReducer;