import "./adminlogin.css"
import React from 'react'


import { Field, Form, Formik } from 'formik';
import axios from "axios"
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import { PRODUCT_API } from "../../../global/Api";
import Brand from "../../../components/common/brand/brand";
import Linkaccounts from "../../../components/common/linkicons/Linkaccounts";

// validation adminloginSchema 
const adminloginSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required("Please enter your password"),
});




export default function Adminlogin() {

	const navigate = useNavigate();
	return (

		<div>
			<div className="adminlogin_page">
				{/* brand  */}
				<Brand />

				{/* toast */}
				<span onLoad={toast(`welcome to Admin Login`, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
				})}>
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
					<span onClick={() => navigate('/about')} className="footer_ca_span " >About</span>
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
									navigate("/adminlogin/adminhome");
								} catch ({ response: { data } }) {
									console.error(data.error);
									toast.error(data.error);
								}
							}}
						>
							{({ errors, touched }) => (

								<Form >
									<button className="adminlogin_btn1" >ADMIN</button>
									<button className="adminlogin_btn2" onClick={() => navigate('/userlogin')} >USER</button>

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
									<div type="submit" className="adminlogin_forgetpassword" onClick={() => navigate('/adminforgetpassword')}>
										Forget password
									</div>

									<button type="submit" className='adminlogin_confirm_btn' >
										Confirm
									</button>

									<p className="adminlogin_register_link">
										Don't have an account
										<br />

										<span className="adminlogin_register" onClick={() => navigate('/adminregister')}>
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
