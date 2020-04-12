import React, { Component } from 'react'
import VideoList from '../video-list'
import withYouTubeService from '../hoc-helpers'
import { fetchVideos } from '../../actions'
import Loader from '../loader'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'

import './video-container.scss'
import ErrorIndicator from '../error-indicator'

class VideoContainer extends Component { 

    componentDidUpdate(prevProps) {
        if(prevProps.query !== this.props.query) { 
            const { query, fetchVideos } = this.props
            if(query) fetchVideos(query)
        }
    }

    render() { 
        const { isLoading, hasError, items } = this.props
        if(isLoading) return <Loader />
        if(hasError) return <ErrorIndicator />
        
        return this.props.items.length && <VideoList items={items} />
    }
}

const mapStateToProps = ({ videoList : { items, isLoading, hasError}, search: { query } }) => { 
    return {
        items,
        isLoading,
        hasError,
        query
    }
}

const mapDispatchToProps = (dispatch, { youtubeService }) => {
    return bindActionCreators({
        fetchVideos : fetchVideos(youtubeService)
    }, dispatch)
}

export default compose(
    withYouTubeService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VideoContainer);