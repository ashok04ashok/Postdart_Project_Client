import React from 'react'
import { useNavigate } from "react-router-dom";

import { BsChat } from 'react-icons/bs';

export default function HomeSidebar() {
    const navigate = useNavigate();

    return (
        <div >
            <div className="home_left_2st">
                <BsChat className="sidebar_chat_icon" onClick={() => navigate('/login/home/message')} />
                <img className="home_side_icons" onClick={() => navigate('/login/home/profile')} src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile' />
                <span className="home_side" onClick={() => navigate('/login/home/profile')} >
                 Kumar
                </span>
            </div>
        </div>
    );
}
