import React from 'react';

import './app.scss';
import SearchBar from '../search-bar';

const App = () => {
    return (
        <div>
            <div className={'header'}>
                <h1>Hello world!</h1>
            </div>
            <SearchBar />
       </div>
    )
}

export default App;