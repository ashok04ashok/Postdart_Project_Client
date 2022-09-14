function Leftchatlist({message}) {
    return (
        <div>
            <div className="left_chat_friends">
                <img src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt="" />
                <div className="chat_friends-name">
                    Ram
                    {message._id}
                </div>
                <div className="last-chat_friends">
                    {message.desc}
                </div>
            </div>
            <br />
        </div>
    );
}
export default Leftchatlist;