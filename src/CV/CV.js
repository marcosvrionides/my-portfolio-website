import React from 'react'
import './CV.css'

function CV(props) {

    return (
        <img
            className={props.scrollPosition > 0 & props.scrollPosition < 400 ? 'CV' : 'defocus-CV'}
            src={require('./CV1024_1.jpg')}
            referrerPolicy="no-referrer"
            alt="Marcos's CV"
        />
    )
}

export default CV