import { combineReducers } from 'redux'
import videoListReducer from './video-list'
import themeReducer from './theme'

export default combineReducers({
    videoList: videoListReducer,
    theme: themeReducer
})