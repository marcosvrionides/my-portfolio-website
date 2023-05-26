import React from 'react'
import './CV.css'

function CV(props) {

    return (
        <img
            className={props.scrollPosition === 0 ? 'defocus-CV' : 'CV'}
            src={require('./CV1024_1.jpg')}
            referrerPolicy="no-referrer"
            alt="Marcos's CV"
        />
    )
}

export default CV