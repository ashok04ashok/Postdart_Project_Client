import { useNavigate } from "react-router-dom"



function Profilephoto() {
    const navigate = useNavigate()

    return (
        <div>

            <img className="profilecard_profile_1" onClick={() => navigate('/educaterlogin/home/profile/photo')} src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile' />
            <img className="profilecard_profile_2" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile' />

        </div>

    );
}

export default Profilephoto;