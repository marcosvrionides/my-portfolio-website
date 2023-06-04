import React from 'react'
import './ScrollIndicator.css'

function ScrollIndicator(props) {
    return (
        <div className='scroll-indicator-container'>
            <div className={props.scrollPosition === 0 ? 'scroll-item-focus' : 'scroll-item-defocus'}>Start</div><br />
            <div className={props.scrollPosition > 0 && props.scrollPosition < 399 ? 'scroll-item-focus' : 'scroll-item-defocus'}>CV</div><br />
            <div className={props.scrollPosition > 399 ? 'scroll-item-focus' : 'scroll-item-defocus'}>Final Year Project (Social Media Website)</div>
        </div>
    )
}

export default ScrollIndicator