import React, { Component } from 'react'

import withYouTubeService from '../hoc-helpers'
import { fetchVideos } from '../../actions'
import Loader from '../loader'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import InfiniteScroll from '../infinite-scroll'
import LastRowCaption from '../last-row-caption'
import './video-container.scss'
import ErrorIndicator from '../error-indicator'


class VideoContainer extends Component { 

    loadItems = () => {
        const { query, fetchVideos } = this.props
        if(query) {
            fetchVideos(query)
        }
    }

    render() { 
        const { isLoading, isEnd, hasError, items, query } = this.props
    
        if(hasError) return <ErrorIndicator />
        
        return query ? 
            <InfiniteScroll 
                isLoading={isLoading}
                isEnd={isEnd}
                query={query}
                loader={<Loader />}
                lastRow={<LastRowCaption />}
                fetch={this.loadItems}
                items={items}
            /> : null
    }
}

const mapStateToProps = ({ videoList : { items, isLoading, isEnd, hasError}, search: { query } }) => { 
    return {
        items,
        isLoading,
        isEnd,
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