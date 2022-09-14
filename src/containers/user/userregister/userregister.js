import "./userregister.css"
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'


import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from "axios"
import { useHistory } from "react-router-dom";
import { PRODUCT_API } from "../../../global/Api";

import { ToastContainer, toast } from 'react-toastify';
import Brand from "../../../components/common/brand/brand";


export default function UserRegister() {

	// validation useregisterSchema 
	const useregisterSchema = yup.object().shape({
		firstName: yup.string().min(2).required(),
		lastName: yup.string().min(1).required(),
		userName: yup.string().required(),
		contactNumber: yup.number().required(),
		email: yup.string().email().required(),
		password: yup.string().required("Please enter your password"),
		confirmPassword: yup.string()
			.required("Please retype your password.")
			.oneOf([yup.ref("password")], "Your passwords do not match."),
	});



	let history = useHistory(); return (
		<div>
			<div className="userregister_page">
				<Brand />
				{/* toast */}
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

				<div className="userregister_main">
					<div className="userregister_form">
						<button className="userregister_btn1" >USER</button>
						<button className="userregister_btn2" onClick={() => history.push('/adminregister')}>ADMIN</button>
						<Formik
							initialValues={{
								firstName:'',
								lastName:'',
								userName: '',
								contactNumber: '',
								email: '',
								password: '',
								confirmPassword: '',
							}}
							validationSchema={useregisterSchema}
							onSubmit={async (values) => {
								console.log(values)
								try {
									await axios.post(`${PRODUCT_API}/userauth/register`, values);
									history.push("/userlogin");
									alert("Registration Successfull")
								} catch ({ response: { data } }) {
									toast.error("already availble user")

								}
							}}
						>
							{({ errors, touched }) => (

								<Form >

									{/* first name */}
									<Field
										type="text"
										name="firstName"
										placeholder="First Name"
										className="input-field"
									/>
									{errors.firstName && touched.firstName ? (
										<span className="text-danger-postdart ">
											*{errors.firstName}*
										</span>
									) : null}


									{/* last Name */}
									<Field
										type="text"
										name="lastName"
										placeholder="Last Name"
										className="input-field"
									/>
									{errors.lastName && touched.lastName ? (
										<span className="text-danger-postdart ">
											*{errors.lastName}*
										</span>
									) : null}









									{/* user name */}
									<Field
										type="text"
										name="userName"
										placeholder="User Name"
										className="input-field"
									/>
									{errors.userName && touched.userName ? (
										<span className="text-danger-postdart ">
											*{errors.userName}*
										</span>
									) : null}


									{/*  contactnumber*/}
									<Field
										type="number"
										name="contactNumber"
										placeholder="Enter your Mobile Number"
										className="input-field"
									/>
									{errors.contactNumber && touched.contactNumber ? (
										<span className="text-danger-postdart ">
											*{errors.contactNumber}*
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
										name="confirmPassword"
										placeholder="Confirm Password"
										className="input-field"
									/>
									{errors.confirmPassword && touched.confirmPassword ? (
										<span className="text-danger-postdart ">
											*{errors.confirmPassword}*
										</span>
									) : null}

									<button type="submit" className="userregister_sign_btn" >
										Register
									</button>
									<br />
									<br />

									<p className="userregister_register_link">
										Already a User?
										<span className="userregister_register_Login" onClick={() => history.push('/userlogin')}>
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