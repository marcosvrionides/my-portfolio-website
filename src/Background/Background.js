import React from 'react'
import './Background.css'

function Background(props) {

    return (
        <div className="background">
            <div className={
                props.scrollPosition === 0 ? "shape-step0"
                    : props.scrollPosition > 0 && props.scrollPosition < 400 ? "shape-step1"
                        : "shape-step2"} />
        </div>
    )
}

export default Background