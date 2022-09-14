import { useHistory } from "react-router-dom";



function Profilephoto() {
	let history = useHistory();
    return (
        <div>

            <span className="profilecard_profile_1" ></span>
            <img className="profilecard_profile_2"
             src="https://i.ibb.co/TYf0BLx/Pics-Art-03-23-07-39-12.jpg"  onClick={() => history.push('/userlogin/userhome/userprofile/photo')}alt='profile' />

        </div>

    );
}

export default Profilephoto;