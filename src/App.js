import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './Profile/Profile';
import CV from './CV/CV';
import Background from './Background/Background';
import FinalYearProject from './FinalYearProject/FinalYearProject';
import ScrollIndicator from './ScrollIndicator/ScrollIndicator';

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
            <ScrollIndicator scrollPosition={scrollPosition} />
            <Background scrollPosition={scrollPosition} />
            <Profile scrollPosition={scrollPosition} />
            <CV scrollPosition={scrollPosition} />
            <FinalYearProject scrollPosition={scrollPosition} />
        </div>
    )
}

export default App