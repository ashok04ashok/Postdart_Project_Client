import { useNavigate } from "react-router-dom";

function Homenav() {
const navigate = useNavigate();
    return ( 


        <nav class="home_nav">
        <div>
            <span class="home_brand_icon">PostDart</span>
        </div>

        <div>
            <div class="home_search_box">
                <input type="text" class="home_search_bar" placeholder="Search" />
                <img class=" home_search_icon" src="https://i.ibb.co/d5wPqDJ/search-icons-283914.png" alt="search-icon-image-1344447" />
            </div>
        </div>
        <div>

            <div class="home_user_profile">
                <img  onClick={() => navigate('/profile')} src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="profile-1" />
                <p>Ashok</p>
            </div>
            {/* <div class="home_user_notification">
                <img onClick={() => navigate('/notification')} src="https://i.ibb.co/hZQmvxT/clipart1040988.png" alt="clipart1040988" />
            </div>
            <div class="home_user_message">
                <img onClick={() => navigate('/message')}src="https://i.ibb.co/pKhmNMm/clipart2140199.png" alt="clipart2140199" />
            </div> */}

        </div>
    </nav>
     );
}

export default Homenav;