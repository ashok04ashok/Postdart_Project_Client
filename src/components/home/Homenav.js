import { useNavigate } from "react-router-dom";
import{BsSearch}from"react-icons/bs"

function Homenav() {
const navigate = useNavigate();
    return ( 


        <nav className="home_nav">
        <div>
            <span className="home_brand_icon"  onClick={() => navigate('/home')}>PostDart</span>
        </div>

        <div>
            <div className="home_search_box">
                <input type="text" className="home_search_bar" placeholder="Search" />
               <span className="home_search_icon"> <BsSearch  /></span>
            </div>
        </div>
        <div>

            <div className="home_user_profile">
                <img  onClick={() => navigate('/profile')} src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="profile-1" />
                <p>Ashok</p>
            </div>
            {/* <div className="home_user_notification">
                <img onClick={() => navigate('/notification')} src="https://i.ibb.co/hZQmvxT/clipart1040988.png" alt="clipart1040988" alt='profile'/>
            </div>
            <div className="home_user_message">
                <img onClick={() => navigate('/message')}src="https://i.ibb.co/pKhmNMm/clipart2140199.png" alt="clipart2140199" alt='profile'/>
            </div> */}

        </div>
    </nav>
     );
}

export default Homenav;