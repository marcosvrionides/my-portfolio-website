import React, { useEffect, useState } from 'react'
import './App.css'
import Profile from './Profile/Profile'
import CV from './CV/CV'
import Background from './Background/Background'

function App() {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='master-container'>
            <div style={{position: 'fixed', top: '1em', right: '1em'}}>{"Scroll position: " + scrollPosition}</div>
            <Background scrollPosition={scrollPosition}/>
            <Profile scrollPosition={scrollPosition}/>
            <CV scrollPosition={scrollPosition}/>
        </div>
    )
}

export default App