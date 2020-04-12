import { combineReducers } from 'redux'
import videoListReducer from './video-list'
import themeReducer from './theme'
import searchReducer from './search'

export default combineReducers({
    videoList: videoListReducer,
    theme: themeReducer,
    search: searchReducer
})