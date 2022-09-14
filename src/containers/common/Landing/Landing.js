import "./landing.css"
import React from 'react'
import { useHistory } from "react-router-dom";

// import {useNavigate } from "react-router-dom";
import Brand from "../../../components/common/brand/brand";

export default function Landing() {

    let history = useHistory();

    return (
        <div>
            <div className="entrance_page">
              <Brand/>
                <div className="entrance_form">
                    <button className="entrance_btn1"  onClick={() => history.push('/userlogin')}>WELCOME</button>
                </div>
            </div>
        </div>
    );
}
