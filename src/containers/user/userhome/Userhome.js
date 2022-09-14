import "./home.css"
import React, { useEffect, useState } from 'react'

import Homenav from "../../../components/user/userhome/Homenav";
import Homeright from "../../../components/user/userhome/Home_right";
import Homeleft from "../../../components/user/userhome/Home_left";
import HomeSidebar from "../../../components/user/userhome/Home_side_bar";
import Homecard from "../../../components/user/userhome/Homecard";

import { Users } from "../../../global/dummyData"
import axios from "axios";
import { PRODUCT_API } from "../../../global/Api";
import Homecard2 from "../../../components/user/userhome/Homecard2";

export default function Userhome() {
    const [posts, setPosts] = useState([])
    // const [query, setQuery] = useState("");
    const [isLoding, setIsLoading] = useState(true)


    useEffect(() => {
        const getPost = async () => {
            try {
                const authToken = window.localStorage.getItem("authToken");
                const res = await axios.get(`${PRODUCT_API}/posts`, { headers: { Authorization: `Bearer ${authToken}`, }, });
                setPosts(res.data);
                setIsLoading(false);
                return;
            } catch (err) {
                if (err.message.includes(403)) {
                    window.localStorage.clear();
                    window.location.href = "/"
                    return
                }
            }
        };
        getPost();
    }, []);


    return (
        <div className="home_all">
            <Homenav />
            <div className="back_ground_color"></div>

            <section>
                <div className="home_left">
                    <Homeright />
                </div>
            </section>

            <section>
                <div className="home_right">
                    <Homeleft />
                </div>
                <br />
            </section>

            <section>
                <div className="home_right_down">
                    {Users.map((p) => (
                        <HomeSidebar key={p._id} user={p} />))}
                </div>
            </section>


            <section>
                <div className="home_main_card">
                    <Homecard2 />
                    {isLoding && (<div>Loding....</div>)}
                    {posts
                        // .filter((g) => g.name.toLowerCase().includes(query))
                        .map((p) => (
                            <Homecard key={p._id} post={p} />))}
                </div>
            </section>
        </div>
    );
}
