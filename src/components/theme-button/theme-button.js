import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { themeChange } from '../../actions'
import { Moon } from '../../icons'
import Switch from 'react-switch'

import './theme-button.scss'

class ThemeButton extends Component { 

    state = {
        darkMode : false
    }

    componentDidUpdate = () => {
        const { themeName } = this.props
        document.body.className = themeName
    }

    handleChange = (checked) => {
        const { themeChange } = this.props
        if(checked) { 
            themeChange('dark')
        } else { 
            themeChange('light')
        }
        this.setState({ darkMode : checked })
    }

    render() {
        return (
            <div className="theme-button">
                <Moon className="theme-button__icon"/>
                <Switch 
                    onChange={this.handleChange} 
                    checked={this.state.darkMode}
                    onColor="#ccc"
                    offColor="#ccc"
                    offHandleColor="#909090"
                    handleDiameter={22}
                    onHandleColor="#2693e6"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={15}
                    width={40}
                     />
            </div>
        )
    }
}

const mapStateToProps = ({ theme : { themeName } }) => {
    return { themeName }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        themeChange
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);