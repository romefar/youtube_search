import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import SearchBar from '../search-bar'
import Header from '../header'
import VideoContainer from '../video-container'
import { YouTubeServiceProvider } from '../youtube-service-context'
import YouTubeService from '../../services/youtube-service'
import Scroller from '../scroller'

import '../../sass-utils/_fonts.css'
import './app.scss'

const youTubeService = new YouTubeService()
console.log(process.env.REACT_APP_YOUTUBE_DATA_API)
const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <YouTubeServiceProvider value={youTubeService}>
                <SearchBar />
                <VideoContainer />
                <Scroller />
            </YouTubeServiceProvider>
        </Provider>
    )
}

export default App;