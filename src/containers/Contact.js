import { Brand } from "../components/brand";
import "../css/contact.css"
import { useNavigate } from "react-router-dom";

function Contact() {

    
	const navigate = useNavigate();
    return (

        <div >
            <div className="e_login_page">
                <Brand />
                <div className="register_main">
                    <div className="register_form">

                        <input type="text" name="FullName" className="input-field" placeholder="Your Fullname" />
                        <input type="text" name="mobileNumber" className="input-field" placeholder="+91" />

                        <input type="text" name="Address" className="input-field" placeholder="Your Address" />
                        
                        <select id="country" name="country" className="input-field">
                            <option value="australia" className="input-field">India</option>
                            <option value="canada" className="input-field">Canada</option>
                            <option value="usa" className="input-field">Dubai</option>
                            <option value="usa" className="input-field">USA</option>
                        </select>

                        <textarea className="input-field" type="text" name="textArea" style={{height:"100px"}} placeholder="Write something...." ></textarea>
                        <button type='submit' className='forgetpassword_sign_btn' onClick={navigate('/educaterlogin')} >Confirm</button>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;