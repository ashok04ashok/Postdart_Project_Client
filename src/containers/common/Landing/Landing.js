import "./landing.css"
import React from 'react'


import {useNavigate } from "react-router-dom";
import Brand from "../../../components/common/brand/brand";

export default function Landing() {

    const navigate=useNavigate();

    return (
        <div>
            <div className="entrance_page">
              <Brand/>
                <div className="entrance_form">
                    <button className="entrance_btn1" onClick={()=>navigate('/userlogin')}>WELCOME</button>
                </div>
            </div>
        </div>
    );
}
