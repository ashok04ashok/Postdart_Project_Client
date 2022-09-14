import React from 'react'
import{BiLogOutCircle} from'react-icons/bi'
import { useHistory } from 'react-router-dom';


export default function Adminnav() {
    const history=useHistory()
    return (
        <div className="home_nav">

            <div>

                <span className="home_brand_icon" >PostDart</span>
            </div>

            
            <section>
                <div  className="home_admin_profile">
                    
                    <h1>ADMIN  <BiLogOutCircle onClick={() => history.push('/adminlogin')}   className="home_admin_profile2"/> </h1>
                    
                </div>
            </section>
        </div>
    );
}
