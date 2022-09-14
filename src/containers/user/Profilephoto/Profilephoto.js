// import "./Profilephoto.css"
import React from 'react'


import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai"

import { useHistory } from "react-router-dom";

export default function Profilephoto() {

	let history = useHistory();    return (
        <div className="photo_card">

            <div>
                <span className="photo_card_likes">
                    Like
                    <span>
                        5
                    </span>
                </span>
                <span className="photo_card_comments">
                    Comments
                    <span>
                        5
                    </span>
                </span>
            </div>

            <div className="profilephotocard_2" onClick={() => history.push('/login/home/profile')}>
                <AiOutlineDelete />
            </div>
            <div className="profilephotocard_3" onClick={() => history.push('/login/home/profile')}>
                <AiOutlineClose />
            </div>
            <img className="profilephotocard_1" 
            src="https://i.ibb.co/TYf0BLx/Pics-Art-03-23-07-39-12.jpg"
              alt='profile' />
        </div>

    );
}

