import React from 'react';
import {useNavigate } from "react-router-dom";

import "../../src/css/entrance.css"
import { Brand } from '../components/brand';

function Entrance() {

    const navigate=useNavigate();

    return (

        <div>

            <div className="entrance_page">

              <Brand/>

                <div className="entrance_form">
                    <button className="entrance_btn1" onClick={()=>navigate('/educaterlogin')}>EDUCATOR</button>
                    <button className="entrance_btn2" onClick={()=>navigate('/userlogin')}>USER</button>
                </div>

            </div>


        </div>



    );




}
export default Entrance;