import Homecard from "../components/home/Homecard";
import Homenav from "../components/home/Homenav";
import HomeSidebar from "../components/home/Home_side_bar";
import "../css/home.css"
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        
        <div class="home_all">
           <Homenav/>
            <div class="back_ground_color"></div> 
            <main>
                <left>
                    <div class="home_left">
                        <div class="home_left_1st">
                            <div class="home_leftuserlist"><img class="home_side_icons" src="https://i.ibb.co/hZQmvxT/clipart1040988.png" /><span class="home_side" onClick={() => navigate('/notification')}> Notification</span></div>
                            <div class="home_leftuserlist"><img class="home_side_icons" src="https://i.ibb.co/pKhmNMm/clipart2140199.png" /><span class="home_side" onClick={() => navigate('/message')}>Messange </span></div>
                        </div>
                        <br />
                        <HomeSidebar />
                    </div>
                </left>
            </main>
            <centre>
                <div class="home_main_card">
                    <Homecard />
                </div>
            </centre>
        </div>
    );
}

export default Home;
