import {
    SET_QUERY_STRING
} from '../actions/actionTypes'

const initialState = {
    query: ""
}

const searchReducer = (state = initialState, action) => { 

    switch(action.type) { 
        case SET_QUERY_STRING:
            return { query: action.payload }
        default:
            return state;
    }
}

export default searchReducer;