function Chatmemberlist({message}) {
    return ( 
        <div className="message_friends">
            <img src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="" />
            <div className="message_friends-name"> 
            {message.user}
              Ashok
              </div>
            <div className="last-message_friends">

            </div>
        </div>
     );
}
export default Chatmemberlist ;