import {
    QUERY_STRING_CHANGED
} from '../actions/actionTypes'

const initialState = {
    query: ""
}

const searchReducer = (state = initialState, action) => { 

    switch(action.type) { 
        case QUERY_STRING_CHANGED:
            return { query: action.payload }
        default:
            return state;
    }
}

export default searchReducer;