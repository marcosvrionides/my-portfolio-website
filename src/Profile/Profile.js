import React from 'react'
import './Profile.css'

function Profile(props) {

  const profilePic = 'https://lh3.googleusercontent.com/a/AGNmyxaFz8HYMTofud7FBFTUp3lYaffv7SrjjBV_VzrT0FE=s96-c';

  return (
    <div className={props.scrollPosition === 0 ? 'name-profilePic' : 'defocus-name-profilePic'}>
      <div className={props.scrollPosition === 0 ? 'display-name' : 'defocus-display-name'}>Marcos Vrionides</div>
      <img className={props.scrollPosition === 0 ? 'profile-picture' : 'defocus-profile-picture'} src={profilePic} alt='Marcos Vrionides' referrerPolicy="no-referrer" />
    </div>
  )
}

export default Profile