import React, { Component } from 'react'

import { UpArrow } from '../../icons/'
import { animateScroll as scroll } from 'react-scroll'

import './scroller.scss'

class Scroller extends Component {

    state = {
        isVisible : false
    }

    handleScroll = () => {
        let windowInnerHeight = Math.floor(window.innerHeight / 2)
        let documentScrollTop = document.documentElement.scrollTop
        if (documentScrollTop > windowInnerHeight) {
            this.setState({ isVisible: true})
        } else {
            this.setState({ isVisible: false })
        }
    }

    handleClick = () => { 
        scroll.scrollToTop()
    }

    componentDidMount = () => { 
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() { 
        const { isVisible } = this.state
        if(!isVisible) return null
        return (
            <div className="scroller"
                 onClick={this.handleClick}>
                <UpArrow className="scroller__icon" />
            </div>
        )
    }
}

export default Scroller;