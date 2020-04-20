import React from 'react'
import { Moon } from '../../assets/icons'
import Switch from 'react-switch'

import './theme-button.scss'

const ThemeButton = (props) => {
    const { handleChange, checked } = props
    return (
        <div className="theme-button">
            <Moon className="theme-button__icon" />
            <Switch
                onChange={handleChange}
                checked={checked}
                onColor="#ccc"
                offColor="#ccc"
                offHandleColor="#909090"
                handleDiameter={22}
                onHandleColor="#2693e6"
                uncheckedIcon={false}
                checkedIcon={false}
                height={15}
                width={40}
                className="theme-button__switch"
            />
        </div>
    )
}

export default ThemeButton;