import "./profile.css"
import React from 'react'
import Profilebrand from "../../../components/user/userprofile/Profilebrand";
import Profilecardphoto from "../../../components/user/userprofile/Profilecardphoto";
import Userdetailscard from "../../../components/user/userprofile/Userdetailscard";
import Profiledetails from "../../../components/user/userprofile/Profiledetails";

export default function Userprofile() {

    return (
        <div >
            <div className="profile_main">
                {/* brand */}
                <Profilebrand />

                {/* profile photo */}
                <section >
                    <div className="profilecard_profile">
                        <Profilecardphoto />
                    </div>
                </section>

                {/* usercarddetails */}
                <section className="userdetails_card">
                    <Userdetailscard />
                </section>

                {/* user skils and details */}
                <section >
                    <div className="Adresss_skills_card">
                        <Profiledetails />
                    </div>
                </section>

                {/* user post photo */}
                <section>
                    <div className="profile_card">
                        <Profilecardphoto />
                    </div>
                </section>
            </div>
        </div>
    );
}

