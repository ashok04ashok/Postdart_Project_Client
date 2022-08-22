
import "./brand.css"
import React from 'react'


import { useNavigate } from "react-router-dom";


export default function Brand(){
	const navigate = useNavigate();
	
	return(
        <div className="header">
				<h2 id="postdartbrand">
				<span onClick={() => navigate('/userlogin')}>	PostDart</span>
				</h2>
			</div>
    );
}