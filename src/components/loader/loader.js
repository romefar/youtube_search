import React from 'react'

import './loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__container">
                <div className="loader__roller">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;