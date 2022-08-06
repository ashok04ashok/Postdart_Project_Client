import React from 'react';
import "../../src/css/userlogin.css"
import { useNavigate } from "react-router-dom";
import { Brand } from '../components/brand';
import { Field, Form, Formik } from 'formik';
import axios from "axios"
import joi from "joi";
import LinkAccounts from '../components/Linkaccounts';




// validation registerSchema 
const loginSchema = joi.object({
	email: joi.string().email({ tlds: { allow: false } }),
	password: joi.string().alphanum().min(3).max(60).required(),
});



function Userlogin() {
	const navigate = useNavigate();
	return (

		<div>
			<div className="e_login_page">
				<Brand />
				<div className="footer_sign">
					<span onClick={() => navigate('/contact')} className="footer_ca_span ">Contact Us</span>
					<span onClick={() => navigate('/about')} className="footer_ca_span " >About</span>


				</div>
				<div className="e_login_main">
					<div className="e_login_form">


						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							validationSchema={loginSchema}
							onSubmit={async (values) => {
								try {

									// await axios.post(`${ProductAPI}/auth/register`, values);
									await axios.post(`http://localhost:3000/register`, values);
									console.log(values);
									navigate("/login");
								} catch (error) { }
							}}
						>
							{({ errors, touched }) => (
								<Form >

									<button className="register_btn1" >USER</button>
									<button className="register_btn2" onClick={() => navigate('/educaterlogin')}>EDUCATOR</button>


									{/* Email */}
									<div>
										<Field
											type="text"
											name="email"
											placeholder="Enter your Email"
											className="input-field"
										/>
									</div>

									{errors.email && touched.email ? (
										<span className="text-danger text-start">*{errors.email}*</span>
									) : null}

									{/* password */}
									<div>
										<Field
											type="text"
											name="password"
											placeholder="Enter your Password"
											className="input-field"
										/>
									</div>

									{errors.password && touched.password ? (
										<span className="text-danger text-start">*{errors.password}*</span>
									) : null}

									<div htmlFor="submit" className="e_login_forgetpassword" onClick={() => navigate('/forgetpassword')}> Forget password</div>

									<button type='submit' className='e_login_confirm_btn' onClick={() => navigate('/home')}>Confirm</button>



									<p className="e_login_register_link">Don't have an account<br />
										<span className="e_login_register" onClick={() => navigate('/userregister')}>Register </span> here</p>
									<p className="e_login_liw">Log in with</p>


									<LinkAccounts />
								</Form>
							)}
						</Formik>

					</div>

				</div>

			</div>
		</div>



	);
}
export default Userlogin;