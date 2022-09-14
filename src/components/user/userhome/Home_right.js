import React from 'react'

import { useHistory } from "react-router-dom";

import { BsChat } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

export default function Homeright() {
	let history = useHistory();

    const Logout = () => {
        window.localStorage.clear();
      history.push("/userlogin");
        toast.success("Logout Successfully");
      };

      
    return (
        <div className="home_left_1st">

            <div className="home_leftuserlist">
                < IoMdNotificationsOutline className="home_side_icons" />
                <span className="home_side" onClick={() => history.push('/userlogin/userhome/notification')}>
                    Notification</span>
            </div>

            <div className="home_leftuserlist">
                <BsChat className="home_side_icons" />
                <span className="home_side" onClick={() => history.push('/userlogin/userhome/message')}>
                    Messange
                </span>
            </div>

            <div className="home_leftuserlist">
                <AiOutlineInfoCircle className="home_side_icons" />
                <span className="home_side" onClick={() => history.push('/userlogin/userhome/userprofile')}>
                    Profile
                </span>
            </div>

            <div className="home_leftuserlist">
                <BiLogOutCircle className="home_side_icons" />
                <span className="home_side" onClick={ Logout}>
                    Logout
                </span>
            </div>
        </div>
    );
}
