
import "./brand.css"
import React from 'react'
import { useHistory } from "react-router-dom";



export default function Brand(){
	let history = useHistory();
	
	return(
        <div className="header">
				<h2 id="postdartbrand">
				<span onClick={() => history.push('/userlogin')}>	PostDart</span>
				</h2>
			</div>
    );
}