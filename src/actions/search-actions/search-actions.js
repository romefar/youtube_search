import {
    QUERY_STRING_CHANGED,
} from './search-action-types'

const searchStringSettled = (query) => { 
    return {
        type : QUERY_STRING_CHANGED,
        payload: query
    }
}

export {
    searchStringSettled
}