import React from 'react'
import './Background.css'

function Background(props) {

    return (
        <div className="background">
            <div className={props.scrollPosition === 0 ? "shape-step0" : 'shape-step1'} />
        </div>
    )
}

export default Background