import React from 'react'
import { useHistory } from "react-router-dom";

import { BsChat } from 'react-icons/bs';

export default function HomeSidebar({user}) {
	let history = useHistory();
    return (
        <div >
            <div className="home_left_2st">
                <BsChat className="sidebar_chat_icon" onClick={() => history.push('/login/home/message')} />
                <img className="home_side_icons" onClick={() => history.push('/login/home/profile')} src={user.pic} alt='profile' />
                <span className="home_side" onClick={() => history.push('/login/home/profile')} >
                 {user.username}
                </span>
            </div>
        </div>
    );
}
