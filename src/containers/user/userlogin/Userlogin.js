import "./userlogin.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react'
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import axios from "axios"
import { PRODUCT_API } from "../../../global/Api";

import Brand from "../../../components/common/brand/brand";
import Linkaccounts from "../../../components/common/linkicons/Linkaccounts";



// validation registerSchema 
const loginSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required("Please enter your password"),
});



export default function Userlogin() {
	let history = useHistory();

	return (

		<div>
			<div className="login_page">
				{/* brand  */}
				<Brand />
				<span>
					<ToastContainer
						position="top-center"
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</span>

				<div className="footer_sign">
					<span onClick={() => history.push('/contact')} className="footer_ca_span ">Contact Us</span>
					<span onClick={() => history.push('/about')} className="footer_ca_span " >About</span>
				</div>


				<div className="login_main">
					<div className="login_form">
						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							validationSchema={loginSchema}
							onSubmit={async (values) => {

								try {
									const {
										data: { authToken },
									} = await axios.post(`${PRODUCT_API}/userauth/login`, values);

									window.localStorage.setItem("authToken", authToken);
									history.push("/userlogin/userhome");
								} catch ({ response: { data } }) {
									console.error(data.error);
									toast.error(data.error);
								}
							}}
						>
							{({ errors, touched }) => (

								<Form >
									<button className="login_btn1" >USER</button>
									<button className="login_btn2" onClick={() => history.push('/adminlogin')}>ADMIN</button>

									{/* Email */}
									<Field
										type="text"
										name="email"
										placeholder="Enter your Email"
										className="input-field"
									/>

									{errors.email && touched.email ? (
										<span className="text-danger-postdart">
											*{errors.email}*
										</span>
									) : null}

									{/* password */}
									<Field
										type="text"
										name="password"
										placeholder="Enter your Password"
										className="input-field"
									/>
									{errors.password && touched.password ? (
										<span className="text-danger-postdart">
											*{errors.password}*
										</span>
									) : null}
									{/* forget password */}
									<div type="submit" className="userlogin_forgetpassword" onClick={() => history.push('/userlogin/userforgetpassword')}>
										Forget password
									</div>

									<button type="submit" className='userlogin_confirm_btn' >
										Confirm
									</button>

									<p className="login_register_link">
										Don't have an account
										<br />
										<span className="login_register" onClick={() => history.push('/userregister')}>
											Register
										</span>
										here
									</p>

									<p className="login_liw">
										Log in with
									</p>

									<Linkaccounts />

								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div >
	);
}
