import "./profile.css"
import React, { useEffect, useState } from 'react'
import Profilebrand from "../../../components/user/userprofile/Profilebrand";
import Profilecardphoto from "../../../components/user/userprofile/Profilecardphoto";
import Userdetailscard from "../../../components/user/userprofile/Userdetailscard";
import Profiledetails from "../../../components/user/userprofile/Profiledetails";
import Profilephoto from "../../../components/user/userprofile/Profilephoto";
import axios from "axios";
import { PRODUCT_API } from "../../../global/Api";

export default function Userprofile() {

    const [post, setPost] = useState([])
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`${PRODUCT_API}/admin/activepost/`);
            setPost(res.data)
        }
        fetchPost()
    }, [])


    return (
        <div >
            <div className="profile_main">
                {/* brand */}
                <Profilebrand />

                {/* profile photo */}
                <section >
                    <div className="profilecard_profile">
                        <Profilephoto />
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
                        {post.map((p) => (
                            <Profilecardphoto key={p._id} post={p} />))}
                    </div>
                </section>
            </div>
        </div>
    );
}

