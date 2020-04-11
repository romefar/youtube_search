import React from 'react';

import './app.scss';
import SearchBar from '../search-bar';
import VideoContainer from '../video-container';
import { YouTubeServiceProvider } from '../youtube-service-context'
import YouTubeService from '../../services/youtube-service'
import ErrorIndicator from '../error-indicator'
import { Provider } from 'react-redux';
import store from '../../store'
const youTubeService = new YouTubeService()

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <div className={'header'}>
                    <h1>Hello world!</h1>
                </div>
                <YouTubeServiceProvider value={youTubeService}>
                    <SearchBar />
                    <ErrorIndicator />
                    <VideoContainer />
                </YouTubeServiceProvider>
            </div>
        </Provider>
    )
}

export default App;