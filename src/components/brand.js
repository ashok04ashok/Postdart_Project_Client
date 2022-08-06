import React from 'react';
import "../css/brand.css"
import { useNavigate } from "react-router-dom";
export  function Brand(){
	const navigate = useNavigate();
	return(

        <div className="header">
				<h2 id="postdartbrand">
				<span onClick={() => navigate('/educaterlogin')}>	PostDart</span>
				</h2>
			</div>
    );
}