import React from 'react';
import { Formik, Field, Form } from "formik"
import joi from "joi";
import axios from "axios"

import { useNavigate } from "react-router-dom";
// import register from '../../auth_service/auth_service';

import "../../src/css/userregister.css"
import { Brand } from '../components/brand';
// import { ProductAPI } from '../../api/ProductsAPI';

// validation registerSchema 
const registerSchema = joi.object({
	fullName: joi.string().alphanum().min(3).max(60).trim(false).required(),
	email: joi.string().email({ tlds: { allow: false } }),
	mobileNumber: joi.string().min(10).length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
	password: joi.string().alphanum().min(3).max(60).required(),
	confirmPassword: joi.ref('password')
});

function Userregister() {

	const navigate = useNavigate();
	return (
		<div>
			<div className="e_login_page">
				<Brand />
				<div className="register_main">
					<div className="register_form">
						<div >
							<Formik 
								initialValues={{
									fullName: "",
									mobileNumber: "",
									email: "",
									password: "",
									confirmpPassword: "",
								}}
								validationSchema={registerSchema}
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

										<button className="register_btn1">USER</button>
										<button className="register_btn2" onClick={() => navigate('/educaterregister')}>EDUCATOR</button>

										{/* Full name */}
										<div>
											<Field
												type="text"
												name="fullname"
												placeholder="Full Name"
												className="input-field"
											/>
										</div>

										{errors.fullName && touched.fullName ? (
											<span className="text-danger text-start">*{errors.fullName}*</span>
										) : null}

										{/* mobile number */}
										<div>
											<Field
												type="text"
												name="mobileNumber"
												placeholder="+91"
												className="input-field"
											/>
										</div>

										{errors.mobileNumber && touched.mobileNumber ? (
											<span className="text-danger text-start">*{errors.mobileNumber}*</span>
										) : null}



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



									{/*confirm password */}
										<div>
											<Field
												type="text"
												name="confirmPassword"
												placeholder="confirm Password"
												className="input-field"
											/>
										</div>

										{errors.confirmpPassword && touched.confirmpPassword ? (
											<span className="text-danger text-start">*{errors.confirmpPassword}*</span>
										) : null}


										<button type='submit' className='register_sign_btn' >Register</button>
										<br/>
										<br/>


										<p className="e_login_register_link"> Already a User? 
										<span className="e_login_register_Login" onClick={() => navigate('/userlogin')}>  Login </span> here</p>
									</Form >
								)}

							</Formik >

						</div>
					</div>
				</div>
			</div>
		</div>


	);

}
export default Userregister;