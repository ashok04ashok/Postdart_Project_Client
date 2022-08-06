import "../css/notification.css"
import { useNavigate } from "react-router-dom";

function Notification() {
    const navigate = useNavigate();
    return (
        <div className="notifiation_page ">
            <h1  onClick={() => navigate('/educaterlogin')}>Notification</h1>
            <section>
                <div className="notifiation_contant_page" onClick={() => navigate('/message')}>
                    <div><span>
                        <div className="notification_heading">
                            <img className="notification_avatar_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="no_image"/>
                            <span className="notification_name">Ashok</span> <span className="notfication_unread">Unread</span> <span className="notfication_time">7 hours ago</span>
                        </div>
                    </span>
                        <div className="notification_messsage">
                            <p>  Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor....</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="notifiation_contant_page">
                    <div><span>
                        <div className="notification_heading">
                            <img className="notification_avatar_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="no_image" />
                            <span className="notification_name">Ashok</span> <span className="notfication_unread">Unread</span> <span className="notfication_time">7 hours ago</span>
                        </div>
                    </span>
                        <div className="notification_messsage">
                            <p>  Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor....</p>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>


    );
}

export default Notification
