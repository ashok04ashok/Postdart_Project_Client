import Homecard from "../components/home/Homecard";
import Homenav from "../components/home/Homenav";
import HomeSidebar from "../components/home/Home_side_bar";
import "../css/home.css"
import { useNavigate } from "react-router-dom";
import { BsChat} from 'react-icons/bs';
import { IoMdNotificationsOutline} from 'react-icons/io';

import { BiLogOutCircle} from 'react-icons/bi';



function Home() {
    const navigate = useNavigate();
    return (
        
        <div className="home_all">
           <Homenav/>
            <div className="back_ground_color"></div> 
            <section>
                    <div className="home_left">
                        <div className="home_left_1st">
                            <div className="home_leftuserlist">< IoMdNotificationsOutline className="home_side_icons"/><span className="home_side" onClick={() => navigate('/notification')}> Notification</span></div>
                            <div className="home_leftuserlist"><BsChat className="home_side_icons"/><span className="home_side" onClick={() => navigate('/message')}>Messange </span></div>
                            <div className="home_leftuserlist"><BiLogOutCircle className="home_side_icons"/><span className="home_side" onClick={() => navigate('/Educaterlogin')}>Logout </span></div>
                        </div>
                        <br />
                        <HomeSidebar />
                    </div>
            </section>
            <section>
                <div className="home_main_card">
                    <Homecard />
                    <Homecard />
                    <Homecard />
                    <Homecard />
                    <Homecard />
                </div>
            </section>
        </div>
    );
}

export default Home;
