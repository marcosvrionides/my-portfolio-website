import React, { useEffect, useState } from 'react'
import './Description.css'

function Description() {

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
        <p className={scrollPosition == 0 ? 'defocus-description' : 'description'}>
            Computer Science undergraduate from Loughborough University.
            Passionate about software engineering and always learning new skills related to it
        </p>
    )
}

export default Description