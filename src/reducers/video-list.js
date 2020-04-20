import {
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_FAILURE,
    VIDEOS_LIST_CLEARED
} from '../actions/video-list-actions/video-list-action-types'

const initialState = {
    items: [],
    isLoading: false, 
    hasError: null,
    isEnd: false
} 

const videoListReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_VIDEOS_REQUEST: 
            return {
                ...state,
                isEnd: false,
                isLoading : true
            }
        case VIDEOS_LIST_CLEARED: 
            return { 
                items: [],
                isLoading: false, 
                hasError: null,
                isEnd: false
            }
        case FETCH_VIDEOS_SUCCESS: 
            return { 
                items: [...state.items, ...action.payload],
                isLoading: false,
                hasError: null,
                isEnd: !action.payload.length
            }
        case FETCH_VIDEOS_FAILURE:
            return { 
                items: [],
                isLoading: false,
                hasError: action.payload,
                isEnd: false
            }
        default: 
            return state;
    }
}

export default videoListReducer;