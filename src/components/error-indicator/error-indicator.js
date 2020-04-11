import React from 'react'

import './error-indicator.scss'

const ErrorIndicator = () => {
    return(
        <div className="error-block">
            <h2 className="error-block__header">An error was occured.</h2>
            <p className="error-block__text">Something went wrong. Try again later.</p>
        </div>
    )
}

export default ErrorIndicator;