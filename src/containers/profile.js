import React from 'react';
import "../css/profile.css"
import{useNavigate}from"react-router-dom"
function Profile() {
    const navigate=useNavigate()
    return (
        <div >
            <div className="profile_main">

                <div className="profile_brand_icon">
                    <span  onClick={() => navigate('/home')}>PostDart</span>
                </div>
                <div className="profile_nav_bgcolor"></div>
                <section >
                    <div className="profilecard_profile">
                        <img className="profilecard_profile_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile'  />
                        <img className="profilecard_profile_2" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile'/>
                    </div>
                </section>

                <section className="userdetails_card">
                    <div className="userdetails_card_name">

                        <h1 >ASHOK</h1>
                    </div>

                    <div className="userdetails_card_rank">
                        <h4>Likes <span>10M</span></h4>
                        <h4>Comments <span>10M</span></h4>

                    </div>
                </section>

                <section className="Adresss_skills_card">

                    <div className="skills_card">
                        <h1 className="skills_card">Skills</h1>
                        <ul>
                            <li >JAVA SCRIPT</li>

                        </ul>
                    </div>
                    <div className="address_card">
                        <p>postdart, Chennai, Tamil Nadu 600113</p>
                    </div>

                    <span>About</span>
                    <ul>
                        <li className="email">
                            <h1 className="label">E-mail:</h1>
                            <span className="info">hello@rsmarquetech.com</span>
                        </li>
                    </ul>
                </section>
                <section>
                    <div className="profile_card">
                        <h1>he</h1> <span>About</span> <span>About</span> <span>About</span> <span>About</span> <span>About</span> <span>About</span> <span>About</span> <span>About</span> <span>About</span> <span>About</span>
                    </div>
                </section>

            </div>
        </div>

    );
}

export default Profile;
