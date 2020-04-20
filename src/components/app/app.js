import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

import SearchBar from '../search-bar'
import Header from '../header'
import { VideoContainer } from '../../containers/'
import Scroller from '../scroller'

import '../../sass-utils/_fonts.css'
import './app.scss'

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <SearchBar />
            <VideoContainer />
            <Scroller />
        </Provider>
    )
}

export default App;