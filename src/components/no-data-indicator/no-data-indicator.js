import React from 'react'
import { Box } from '../../icons'

import './no-data-indicator.scss'

const NoDataIndicator = () => {
    return (
        <div className="response-message">
           <div className="response-message__caption-container"> 
                <p className="response-message__caption">Sorry we couldn't find any matches for you. </p>
                <Box className="response-message__logo" />
           </div>
        </div>
    )
}

export default NoDataIndicator;