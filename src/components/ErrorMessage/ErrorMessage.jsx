import React from 'react'
import './ErrorMessage.scss'

function ErrorMessage({display}) {
    if (display === true) {
        return (
            <p className="error">
                Unfortunately, Bench only provides services to small businesses that reside in the United States at this time.
            </p>
        )
    }
    else {
        return (
            <p className="not-visible">
             This field is required
            </p>
        )
    }
    
}

export default ErrorMessage