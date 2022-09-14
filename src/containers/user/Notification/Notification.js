import "./notification.css"
import React from 'react'


import { useHistory } from "react-router-dom";
import Notificationlist from "../../../components/user/notification/Notificationlist";

export default function Notification() {
	let history = useHistory();
    return (
        <div className="notifiation_page ">
            {/* heading */}
            <h1 onClick={() => history.push('/userlogin/userhome')}>Notification</h1>
            {/* notification */}
            <Notificationlist />
        </div>
    );
}
 