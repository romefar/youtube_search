import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { themeChange } from '../actions'
import ThemeButton from '../components/theme-button'

class ThemeContainer extends Component { 

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
        return <ThemeButton 
                  checked={this.state.darkMode}
                  handleChange={this.handleChange}
                />
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
export default connect(mapStateToProps, mapDispatchToProps)(ThemeContainer);