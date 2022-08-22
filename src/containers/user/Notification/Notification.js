import "./notification.css"
import React from 'react'


import { useNavigate } from "react-router-dom";
import Notificationlist from "../../../components/user/notification/Notificationlist";

export default function Notification() {
    const navigate = useNavigate();

    return (
        <div className="notifiation_page ">
            {/* heading */}
            <h1 onClick={() => navigate('/userlogin/userhome')}>Notification</h1>
            {/* notification */}
            <Notificationlist />
        </div>
    );
}
 