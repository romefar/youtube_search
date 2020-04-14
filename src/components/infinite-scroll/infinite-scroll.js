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
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
            if(isMobile && windowInnerHeight + window.pageYOffset >= documentOffsetHeight - 20) { 
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
           <section className="video-container">
                <VideoList items={items} />
                {isLoading ? loader : null}
                {isEnd && !items.length ? noData : isEnd ? lastRow : null}
           </section>
        )
    }
}

export default InfiniteScroll;