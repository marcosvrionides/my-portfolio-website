import React, { useEffect, useState } from 'react'
import './Profile.css'

function Profile() {

  const profilePic = 'https://lh3.googleusercontent.com/a/AGNmyxaFz8HYMTofud7FBFTUp3lYaffv7SrjjBV_VzrT0FE=s96-c';

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
    <div className={scrollPosition == 0 ? 'name-profilePic' : 'defocus-name-profilePic'}>
      <div className={scrollPosition == 0 ? 'display-name' : 'defocus-display-name'}>Marcos Vrionides</div>
      <img className={scrollPosition == 0 ? 'profile-picture' : 'defocus-profile-picture'} src={profilePic} alt='profile picture' referrerPolicy="no-referrer" />
    </div>
  )
}

export default Profile