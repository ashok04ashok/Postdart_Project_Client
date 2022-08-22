import React from 'react'
import { useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs"

function Homenav() {
    const navigate = useNavigate();

    return (
        <div className="home_nav">

            <div>
                <span className="home_brand_icon" >PostDart</span>
            </div>

            <section>
                <div className="home_search_box">
                    <input type="text" className="home_search_bar" placeholder="Search" />
                    <span className="home_search_icon"> <BsSearch /></span>
                </div>
            </section>

            <section>
                <div onClick={() => navigate('/userlogin/userhome/userprofile')} className="home_user_profile">
                    <img  src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="profile-1" />
                    <p>Ashok</p>
                </div>
            </section>
        </div>
    );
}

export default Homenav;