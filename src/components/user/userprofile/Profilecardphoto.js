import React from 'react'

import { useHistory } from "react-router-dom";
// import { AiOutlineClose, AiOutlineDelete,AiFillEdit } from "react-icons/ai" 
export default function Profilecardphoto({post}) {
	let history = useHistory();
    return (
        <div  >
            <span ><img className="profilecardphoto" 
            // src="https://i.ibb.co/MDgj1ry/download.jpg"
            src={post.photo}
              onClick={() => history.push('/userlogin/userhome/userprofile/photo')} 
              alt='profile' /></span>
            {/* <AiOutlineDelete /><AiOutlineClose /><AiFillEdit/> */}
        </div>

    );
}