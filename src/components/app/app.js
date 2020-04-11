import React from 'react';

import './app.scss';
import SearchBar from '../search-bar';
import Header from '../header'
import VideoContainer from '../video-container';
import { YouTubeServiceProvider } from '../youtube-service-context'
import YouTubeService from '../../services/youtube-service'
import { Provider } from 'react-redux';
import store from '../../store'
const youTubeService = new YouTubeService()

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <YouTubeServiceProvider value={youTubeService}>
                    <SearchBar />
                    <VideoContainer />
                </YouTubeServiceProvider>
            </div>
        </Provider>
    )
}

export default App;