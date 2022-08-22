import React from 'react'

import { useNavigate } from "react-router-dom"

export default function Profilecardphoto() {
    const navigate = useNavigate()

    return (
        <div className="profilecardphoto" >
            <img className="profilecardphoto_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" onClick={() => navigate('/userlogin/userhome/userprofile/photo')} alt='profile' />
        </div>

    );
}