import "./Profilephoto.css"
import React from 'react'


import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai"

import { useNavigate } from "react-router-dom"

export default function Profilephoto() {

    const navigate = useNavigate()
    return (
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

            <div className="profilephotocard_2" onClick={() => navigate('/login/home/profile')}>
                <AiOutlineDelete />
            </div>
            <div className="profilephotocard_3" onClick={() => navigate('/login/home/profile')}>
                <AiOutlineClose />
            </div>
            <img className="profilephotocard_1" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile' />
        </div>

    );
}

