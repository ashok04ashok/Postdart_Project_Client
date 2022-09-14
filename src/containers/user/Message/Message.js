import "./message.css"
import React, { useEffect, useState } from 'react'

import Chatmemberlist from "../../../components/user/message/Chatmemberlist";
import Leftchatlist from "../../../components/user/message/Leftchatlist";
// import Rightchatlist from "../../../components/user/message/Rightchatlist";

import {GrSend }from "react-icons/gr"

import { useHistory } from "react-router-dom";
import { PRODUCT_API } from "../../../global/Api";
import axios from "axios";





export default function Message() {
	let history = useHistory();

    const [message,setMessage]=useState([])
 
useEffect(()=>{
    const fetchMessage=async()=>{
    const res=await axios.get(`${PRODUCT_API}/admin/activemessage`);
    setMessage(res.data)
   }
   fetchMessage()
   },[])

    return (
        <div>
            <div className="profile_brand_icon">
                <span onClick={() => history.push('/login/home')}>Message</span>
            </div>

            <section>
                <div className="message_memmber_list" >
                    {message.map((p)=>(
                      <Chatmemberlist key={p.id} message={p} />) )}
                </div>
            </section>

            <section>
                <div className="chat_memmber_list" >
                {message.map((p)=>(
                      <Leftchatlist key={p._id} message={p} />) )}
                  </div>
                <div className="message_chat_button">
                    <input className="message_chat_button_input" placeholder="Type your message here" />
                    <div className="message_chat_send" type="button"><GrSend/></div>
                </div>
            </section>

        </div>
    );
}


