import React from 'react'

import { useNavigate } from "react-router-dom";

import { BsChat } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';

export default function Homeright() {
    const navigate = useNavigate();

    return (
        <div className="home_left_1st">

            <div className="home_leftuserlist">
                < IoMdNotificationsOutline className="home_side_icons" />
                <span className="home_side" onClick={() => navigate('/userlogin/userhome/notification')}>
                    Notification</span>
            </div>

            <div className="home_leftuserlist">
                <BsChat className="home_side_icons" />
                <span className="home_side" onClick={() => navigate('/userlogin/userhome/message')}>
                    Messange
                </span>
            </div>

            <div className="home_leftuserlist">
                <AiOutlineInfoCircle className="home_side_icons" />
                <span className="home_side" onClick={() => navigate('/userlogin/userhome/userprofile')}>
                    Profile
                </span>
            </div>

            <div className="home_leftuserlist">
                <MdHelpOutline className="home_side_icons" />
                <span className="home_side" onClick={() => navigate('/contact')}>
                    Help
                </span>
            </div>

            <div className="home_leftuserlist">
                <BiLogOutCircle className="home_side_icons" />
                <span className="home_side" onClick={() => navigate('/userlogin')}>
                    Logout
                </span>
            </div>
        </div>
    );
}
