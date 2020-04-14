import React from 'react'
import { Finish } from '../../icons'

import './last-row-caption.scss'

const LastRowCaption = () => {
    return (
        <div className="last-row">
            <div className="last-row__caption-container">
                <p className="last-row__caption">You have watched the whole collection.</p>
                <Finish className="last-row__logo" />
            </div>
        </div>
    )
}

export default LastRowCaption;