import React from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Gamermatch</title>
        <meta property="og:title" content="Profile - Gamermatch" />
      </Helmet>
    </div>
  )
}

export default Profile
