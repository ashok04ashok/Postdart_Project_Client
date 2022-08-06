import "../css/message.css"
import {useNavigate}from "react-router-dom"
function Message() {
    const navigate=useNavigate()
    
    return (
        
        <div>
             <div className="profile_brand_icon">
                    <span  onClick={() => navigate('/home')}>PostDart</span>
                </div>
            <section>
                <div className="message_memmber_list" >
                    <div className="message_friends">
                        <img src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="" />
                        <div className="message_friends-name">     Ashok      </div>
                        <div className="last-message_friends">Hello, Are you there?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est saepe consequatur perferendis non tenetur a reiciendis sequi, amet voluptatibus, perspiciatis tempora reprehenderit consequuntur vero optio nam asperiores architecto in.</div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div className="chat_memmber_list" >
                        <div className="left_chat_friends">
                            <img src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="" />
                            <div className="chat_friends-name">     Ashok      </div>
                            <div className="last-chat_friends">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est saepe consequatur perferendis non tenetur a reiciendis sequi, amet voluptatibus, perspiciatis tempora reprehenderit consequuntur vero optio nam asperiores architecto in.Hello, Are you there?</div>

                        </div>
                        <br />
                        <div className="right_chat_friends">
                            <img src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="" />
                            <div className="right_chat_friends-name ">     Ashok     </div>
                            <div className="last_right_chat_friends">Hello, Are you there?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est saepe consequatur perferendis non tenetur a reiciendis sequi, amet voluptatibus, perspiciatis tempora reprehenderit consequuntur vero optio nam asperiores architecto in.</div>
                        </div>
                        <br />
                    </div>
                </div>
            </section>
            <section>
                <div className="Message_chat_button">
                    <input className="message_chat_button_input" placeholder="Type your message here" />
                    <button className="message_chat_send" type="button">Send</button>
                </div>
            </section>
        </div>


    );
}

export default Message

