import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'

export const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Evans</Typography>
                <Typography className="title">Web Developer</Typography>
            </div>

            <figure className="profile_image">
                <img src={require('../../assets/images/profile.jpg')} alt=""/>
            </figure>

            <div className="profile_information">
                insert timeline
                <br/>
                <button>Download CV</button>
            </div>

        </div>
    )
}

export default Profile
