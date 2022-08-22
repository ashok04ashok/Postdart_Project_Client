import React from 'react'

import { useNavigate } from "react-router-dom";
import { GrUploadOption } from 'react-icons/gr';

export default function Homeleft() {
    const navigate = useNavigate();

    return (
        <div className="home_right_1st">
                       {/* <div> <input className="home_right_input" placeholder="Type your message here" />  </div> */}
                        <div className="home_userlist">
                            <GrUploadOption className="home_side_icons" />
                            <span className="home_side" onClick={() => navigate('/userlogin/userhome/message')}> 
                            upload 
                            </span>
                        </div>
                    </div>
    );
}
