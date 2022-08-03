import { useNavigate } from "react-router-dom";

function Homecard() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="home_card">
                <div >
                    <img class="home_card_profile" onClick={() => navigate('/profile')} src="https://i.ibb.co/2NpKFNh/profile-1.jpg" />
                    <div class="home_card_name">
                        <span><b>John </b></span>
                    </div>
                </div>
                <div class=" home_card_profile2">
                    <img src="https://i.ibb.co/2NpKFNh/profile-2.jpg" />

                    <div class="home_card_profile3">
                        <span><b>like </b></span>
                        <span><b>5 </b></span>
                        <span><b>comments </b></span>
                        <span><b> 5</b></span>
                    </div>
                </div>


            </div>
            <br /></div>


    );
}

export default Homecard;