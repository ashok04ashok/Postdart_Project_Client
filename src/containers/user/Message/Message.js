import "./message.css"
import React from 'react'

import Chatmemberlist from "../../../components/user/message/Chatmemberlist";
import Leftchatlist from "../../../components/user/message/Leftchatlist";
import Rightchatlist from "../../../components/user/message/Rightchatlist";

import {GrSend }from "react-icons/gr"

import { useNavigate } from "react-router-dom"

export default function Message() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="profile_brand_icon">
                <span onClick={() => navigate('/login/home')}>Message</span>
            </div>

            <section>
                <div className="message_memmber_list" >
                    <Chatmemberlist />
                </div>
            </section>

            <section>
                <div className="chat_memmber_list" >
                    <Leftchatlist />
                    <Rightchatlist />
                  </div>
                <div className="message_chat_button">
                    <input className="message_chat_button_input" placeholder="Type your message here" />
                    <div className="message_chat_send" type="button"><GrSend/></div>
                </div>
            </section>

        </div>
    );
}


