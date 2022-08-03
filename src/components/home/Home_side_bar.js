import { useNavigate } from "react-router-dom";

function HomeSidebar() {
    const navigate = useNavigate();
    return (  
        <div class="home_left_2st">
       <div class="home_left_2st"><img class="home_side_icons" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" /><span class="home_side"  onClick={() => navigate('/profile')} ><b>Kumar</b></span></div>
        <div class="home_left_2st"><img class="home_side_icons" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" /><span class="home_side"  onClick={() => navigate('/profile')} ><b>Kumar</b></span></div>
        <div class="home_left_2st"><img class="home_side_icons" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" /><span class="home_side"  onClick={() => navigate('/profile')} ><b>Kumar</b></span></div>
    </div>
    );
}

export default HomeSidebar;