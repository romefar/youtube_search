import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import validate from '../../utils/validate'
import './search-bar.scss';

class SearchBar extends Component {
    
    state = {
        query: ""
    }

    handleChange = (e) => { 
        const query = e.target.value;
        if(validate(query)) { 
            this.setState({
                query
            })
        } else { 
            this.setState({
                query: ""
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    handleClick = () => {

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

export default SearchBar;
