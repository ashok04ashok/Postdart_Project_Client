import "./home.css"
import React from 'react'

import Homenav from "../../../components/user/userhome/Homenav";
import Homeright from "../../../components/user/userhome/Home_right";
import Homeleft from "../../../components/user/userhome/Home_left";
import HomeSidebar from "../../../components/user/userhome/Home_side_bar";
import Homecard from "../../../components/user/userhome/Homecard";


 export default function Userhome() {

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
                    <Homeleft/>
                </div>
                <br />
            </section>

            <section>
                <div className="home_right_down">
                    <HomeSidebar/>
                </div>
            </section>

            <section>
                <div className="home_main_card">
                    <Homecard />
                </div>
            </section>
        </div>
    );
}
