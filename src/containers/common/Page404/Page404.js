import "./page404.css"
import React from 'react'


// import {useNavigate } from "react-router-dom";
import Brand from "../../../components/common/brand/brand";
import { useHistory } from "react-router-dom";
export default function Page404() {

	let history = useHistory();

    return (
        <div>
            <div className="page404_page">
              <Brand/>
                <div className="page404_form">

                    <button className="page404_btn1"  onClick={() => history.push('/userlogin')} >404 Page Not Found</button>
                </div>
            </div>
        </div>
    );
}
