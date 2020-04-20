import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchVideos } from '../actions'
import Loader from '../components/loader'
import InfiniteScroll from '../components/infinite-scroll'
import LastRowCaption from '../components/last-row-caption'
import ErrorIndicator from '../components/error-indicator'
import NoDataIndicator from '../components/no-data-indicator'

class VideoContainer extends Component { 

    loadItems = () => {
        const { query, fetchVideos } = this.props
        if(query) fetchVideos(query)
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
                noData={<NoDataIndicator />}
                fetch={this.loadItems}
                items={items}
            /> : null
    }
}

const mapStateToProps = ({ videoList : { items, isLoading, isEnd, hasError},
                           search: { query } }) => { 
    return {
        items,
        isLoading,
        isEnd,
        hasError,
        query
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchVideos
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer)