import "./userregister.css"
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'


import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { PRODUCT_API } from "../../../global/Api";

import { ToastContainer, toast } from 'react-toastify';
import Brand from "../../../components/common/brand/brand";


export default function UserRegister() {

	// validation useregisterSchema 
	const useregisterSchema = Yup.object().shape({
		username: Yup.string().required(),
		contactnumber: Yup.number().required().positive().integer(),
		email: Yup.string().email().required(),
		password: Yup.string().required("Please enter your password"),
		cPassword: Yup.string()
			.required("Please retype your password.")
			.oneOf([Yup.ref("password")], "Your passwords do not match."),
	});



	const navigate = useNavigate();
	return (
		<div>
			<div className="userregister_page">
				<Brand/>
				{/* toast */}
				<span onLoad={toast(`welcome to User Register`, {
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

				<div className="userregister_main">
					<div className="userregister_form">
						<button className="userregister_btn1" >USER</button>
						<button className="userregister_btn2" onClick={() => navigate('/adminregister')}>ADMIN</button>
						<Formik
							initialValues={{
								username: '',
								contactnumber: '',
								email: '',
								password: '',
								cPassword: '',
							}}
							validationSchema={useregisterSchema}
							onSubmit={async (values) => {
								console.log(values)
								try {
									await axios.post(`${PRODUCT_API}/userauth/register`, values);
									navigate("/userlogin");
									toast.success("Registration Successfull")
								} catch ({ response: { data } }) {
									toast.error("already availble user")

								}
							}}
						>
							{({ errors, touched }) => (

								<Form >
									{/* Full name */}
									<Field
										type="text"
										name="username"
										placeholder="Full Name"
										className="input-field"
									/>
									{errors.username && touched.username ? (
										<span className="text-danger-postdart ">
											*{errors.username}*
										</span>
									) : null}


									{/*  contactnumber*/}
									<Field
										type="number"
										name="contactnumber"
										placeholder="Enter your Mobile Number"
										className="input-field"
									/>
									{errors.contactnumber && touched.contactnumber ? (
										<span className="text-danger-postdart ">
											*{errors.contactnumber}*
										</span>
									) : null}

								


									{/* Email */}
									<Field
										type="text"
										name="email"
										placeholder="Enter your Email"
										className="input-field"
									/>
									{errors.email && touched.email ? (
										<span className="text-danger-postdart ">
											*{errors.email}*
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
										<span className="text-danger-postdart ">
											*{errors.password}*
										</span>
									) : null}

									{/*confirm password */}
									<Field
										type="password"
										name="cPassword"
										placeholder="Confirm Password"
										className="input-field"
									/>
									{errors.cPassword && touched.cPassword ? (
										<span className="text-danger-postdart ">
											*{errors.cPassword}*
										</span>
									) : null}

									<button type="submit" className="userregister_sign_btn" >
										Register
									</button>
									<br />
									<br />

									<p className="userregister_register_link">
										Already a User?
										<span className="userregister_register_Login" onClick={() => navigate('/userlogin')}>
											Login 
										</span>
										here
									</p>

								</Form >
							)}
						</Formik >

					</div>
				</div>
			</div>
		</div>
	);
}