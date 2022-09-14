import React from 'react'
import { useHistory } from "react-router-dom";

import { BsSearch } from "react-icons/bs"

function Homenav() {
	let history = useHistory();
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
                <div onClick={() => history.push('/userlogin/userhome/userprofile')} className="home_user_profile">
                    <img  src="https://i.ibb.co/TYf0BLx/Pics-Art-03-23-07-39-12.jpg" alt="profile-1" />
                    <p>Ashok</p>
                </div>
            </section>
        </div>
    );
}

export default Homenav;