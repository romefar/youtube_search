import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { searchStringSettled, videosListRestored } from '../../actions/'
import validate from '../../utils/validate'

import './search-bar.scss';

class SearchBar extends Component {

    // TEST SEARCH STRING (8 results) : Egzod - My Stranger (feat. RIELL) cool new 2020 str
    state = {
        query: ""
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    handleClick = () => {
        const { query } = this.state
        const [trimmedQuery, isValidated] = validate(query)
        const { searchStringSettled, videosListRestored, query:storeQuery } = this.props

        if (isValidated && storeQuery !== trimmedQuery) {
            videosListRestored()
            searchStringSettled(trimmedQuery)
        }
    }

    render() {
        return (
            <section className="search-bar">
                <div className="container">
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <div className="search-form__input-container">
                            <input className='search-form__input-field'
                                type='text'
                                value={this.state.query}
                                placeholder="Search for videos..."
                                onChange={this.handleChange} />
                            <button className="search-icon"
                                onClick={this.handleClick} >
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    fixedWidth
                                    size="2x" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({ search: { query } }) => {
    return { query }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        searchStringSettled, 
        videosListRestored 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
