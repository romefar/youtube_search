import React, { Component } from 'react'
import debounce from "lodash.debounce"
import VideoList from '../video-list'

class InfiniteScroll extends Component { 

    setWindowOnScroll = () => { 
        window.onscroll = debounce(() => {
            let windowInnerHeight = window.innerHeight
            let documentScrollTop = document.documentElement.scrollTop
            let documentOffsetHeight = document.documentElement.offsetHeight

            if (windowInnerHeight + documentScrollTop === documentOffsetHeight) {  
                if(!this.props.isLoading && !this.props.isEnd) { 
                    this.props.fetch();
                }
            }
        }, 100)
    }

    componentDidMount = () => { 
        this.setWindowOnScroll()
        this.props.fetch()
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.query !== this.props.query) { 
            this.props.fetch()
        }
    }

    render() {
        const { isLoading, isEnd, lastRow, items, loader, noData } = this.props;
        return (
           <React.Fragment>
                <VideoList items={items} />
                {isLoading ? loader : null}
                {isEnd && !items.length ? noData : isEnd ? lastRow : null}
           </React.Fragment>
        )
    }
}

export default InfiniteScroll;