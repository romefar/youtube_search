import React from 'react'

import { YouTubeIcon } from '../../icons/'
import ThemeButton from '../theme-button'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__flex-container">
                    <div className="header__logo-container">
                        <YouTubeIcon className="header__logo" />
                        <span className="header__title">YouTube</span>
                    </div>
                    <ThemeButton />
                </div>
            </div>
        </header>
    )
}

export default Header;