import "../css/notification.css"
import { useNavigate } from "react-router-dom";

function Notification() {
    const navigate = useNavigate();
    return (
        <div class="notifiation_page ">
            <h1>Notification</h1>
            <section>
                <div class="notifiation_contant_page" onClick={() => navigate('/message')}>
                    <div><span>
                        <div class="notification_heading">
                            <img class="notification_avatar_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="no image"/>
                            <span class="notification_name">Ashok</span> <span class="notfication_unread">Unread</span> <span class="notfication_time">7 hours ago</span>
                        </div>
                    </span>
                        <div className="notification_messsage">
                            <p>  Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo Hello, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor....</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="notifiation_contant_page">
                    <div><span>
                        <div class="notification_heading">
                            <img class="notification_avatar_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="no image" />
                            <span class="notification_name">Ashok</span> <span class="notfication_unread">Unread</span> <span class="notfication_time">7 hours ago</span>
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
