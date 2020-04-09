import React from 'react';

import './app.scss';
import SearchBar from '../search-bar';
import { YouTubeServiceProvider } from '../youtube-service-context'
import YouTubeService from '../../services/youtube-service'

const youTubeService = new YouTubeService()

const App = () => {
    return (
        <div>
            <div className={'header'}>
                <h1>Hello world!</h1>
            </div>
            <YouTubeServiceProvider value={youTubeService}>
                <SearchBar />
            </YouTubeServiceProvider>
        </div>
    )
}

export default App;