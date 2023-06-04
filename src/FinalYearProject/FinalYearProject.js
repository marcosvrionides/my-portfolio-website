import React from 'react';
import './FinalYearProject.css';

function FinalYearProject(props) {
    return (
        <div className={props.scrollPosition >= 400 ? 'focus-fyp' : 'defocus-fyp'}>
            <div className='website-info'>
                <a className='website-link' href='http://www.studentsthoughts.com:9000'>StudentsThoughts.com</a><br />
                <p>
                    A social media website which I created for my final year project using <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b> and <b>Firebase Realtime Database</b><br />
                    The website is deployed on a <b>Google Cloud Virtual Machine</b> and is updated by connecting via <b>ssh</b> to the VM and using <b>git</b> to pull changes<br />
                    Bellow are some screenshots of the website.
                </p>
            </div>
            <div className='screenshot-display'>
                <figure>
                    <img
                        className='screenshot'
                        src={require('./Screenshots/LoginPage.jpg')}
                        referrerPolicy="no-referrer"
                        alt="Login Page"
                    />
                    <figcaption className='screenshot-caption'>Login Page</figcaption>
                </figure>
                <figure>
                    <img
                        className='screenshot'
                        src={require('./Screenshots/Homescreen.jpg')}
                        referrerPolicy="no-referrer"
                        alt="Homescreen"
                    />
                    <figcaption className='screenshot-caption'>Homescreen</figcaption>
                </figure>
                <figure>
                    <img
                        className='screenshot'
                        src={require('./Screenshots/Messages.jpg')}
                        referrerPolicy="no-referrer"
                        alt="Messages"
                    />
                    <figcaption className='screenshot-caption'>Messages</figcaption>
                </figure>
                <figure>
                    <img
                        className='screenshot'
                        src={require('./Screenshots/DarkModeSettings.jpg')}
                        referrerPolicy="no-referrer"
                        alt="Dark Mode Settings"
                    />
                    <figcaption className='screenshot-caption'>Dark Mode Settings</figcaption>
                </figure>
                <figure>
                    <img
                        className='screenshot'
                        src={require('./Screenshots/ProfilePage.jpg')}
                        referrerPolicy="no-referrer"
                        alt="Profile Page"
                    />
                    <figcaption className='screenshot-caption'>Profile Page</figcaption>
                </figure>
                <figure>
                    <img
                        className='screenshot'
                        src={require('./Screenshots/Firebase.jpg')}
                        referrerPolicy="no-referrer"
                        alt="Firebase"
                    />
                    <figcaption className='screenshot-caption'>Firebase</figcaption>
                </figure>
            </div>
        </div >
    )
}

export default FinalYearProject