import "./adminlogin.css"
import React from 'react'


import { Field, Form, Formik } from 'formik';
import axios from "axios"
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

import { PRODUCT_API } from "../../../global/Api";
import Brand from "../../../components/common/brand/brand";
import Linkaccounts from "../../../components/common/linkicons/Linkaccounts";

// validation adminloginSchema 
const adminloginSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	code: Yup.string().min(3).max(20).required(),
	password: Yup.string().required("Please enter your password"),
});




export default function Adminlogin() {

	let history = useHistory();
	return (

		<div>
			<div className="adminlogin_page">
				{/* brand  */}
				<Brand />

				{/* toast */}
				<span >
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
				{/* nav header */}
				<div className="footer_sign">
					<span onClick={() => history.push('/about')} className="footer_ca_span " >About</span>
				</div>


				<div className="adminlogin_main">
					<div className="adminlogin_form">
						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							validationSchema={adminloginSchema}
							onSubmit={async (values) => {

								try {
									const {
										data: { authToken },
									} = await axios.post(`${PRODUCT_API}/adminauth/login`, values);

									window.localStorage.setItem("authToken", authToken);
									history.push("/adminlogin/adminhome");

								} catch ({ response: { data } }) {
									console.error(data.error);
									toast.error(data.error);
								}
							}}
						>
							{({ errors, touched }) => (

								<Form >
									<button className="adminlogin_btn1" >ADMIN</button>
									<button className="adminlogin_btn2" onClick={() => history.push('/userlogin')} >USER</button>

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

									{/* code*/}
									<Field
										type="password"
										name="code"
										placeholder="Enter your code"
										className="input-field"
									/>
									<p>code:- 654321</p>
									{errors.code && touched.code ? (
										<span className="text-danger-postdart ">
											*{errors.code}*
										</span>
									) : null}


									{/* password */}
									<Field
										type="password"
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
									<div type="submit" className="adminlogin_forgetpassword" onClick={() => history.push('/adminlogin/userforgetpassword')}>
										Forget password
									</div>

									<button type="submit" className='adminlogin_confirm_btn' >
										Confirm
									</button>

									<p className="adminlogin_register_link">
										Don't have an account
										<br />

										<span className="adminlogin_register" onClick={() => history.push('/adminregister')}>
											Register
										</span>
										here
									</p>

									<p className="adminlogin_liw">
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
