import "./adminregister.css"
import React from 'react'


import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from "axios"
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Brand from "../../../../src/components/common/brand/brand";
import { PRODUCT_API } from "../../../global/Api";

export default function AdminRegister() {

	// validation AdminregisterSchema 
	const AdminregisterSchema = Yup.object().shape({
		adminName: Yup.string().required(),
		email: Yup.string().email().required(),
		code: Yup.string().min(3).max(20).required(),
		password: Yup.string().required("Please enter your password"),
		confirmPassword: Yup.string()
			.required("Please retype your password.")
			.oneOf([Yup.ref("password")], "Your passwords does not match."),
	});



	let history = useHistory();
		return (
		<div>
			<div className="adminregister_page">
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

				<div className="adminregister_main">
					<div className="adminregister_form">
						<button className="adminregister_btn1" >ADMIN</button>
						<button className="adminregister_btn2" onClick={() => history.push('/userregister')}>USER</button>
						<Formik
							initialValues={{
								adminName: '',
								email: '',
								code:'',
								password: '',
								confirmPassword: '',
							}}
							validationSchema={AdminregisterSchema}
							onSubmit={async (values) => {
								try {
									await axios.post(`${PRODUCT_API}/adminauth/register`, values);
									history.push("/adminlogin");
									alert("Registration Successfull")
								} catch ({ response: { data:{error} } }) {
									toast.error(error)

								}
							}}
						>
							{({ errors, touched }) => (

								<Form >
									{/* adminName */}
									<Field
										type="text"
										name="adminName"
										placeholder="Admin Name"
										className="input-field"
									/>
									{errors.adminName && touched.adminName ? (
										<span className="text-danger-postdart ">
											*{errors.adminName}*
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

										{/* code*/}
										<Field
										type="password"
										name="code"
										placeholder="Enter your code"
										className="input-field"
									/>
									<p>code:- 123456</p>
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
										<span className="text-danger-postdart ">
											*{errors.password}*
										</span>
									) : null}

									{/*confirm password */}
									<Field
										type="text"
										name="confirmPassword"
										placeholder="Confirm Password"
										className="input-field"
									/>
									{errors.confirmPassword && touched.confirmPassword ? (
										<span className="text-danger-postdart ">
											*{errors.confirmPassword}*
										</span>
									) : null}

									<button type="submit" className="adminregister_sign_btn" >
										Register
									</button>
									<br />
									<br />

									<p className="adminregister_register_link">
										Already a User?
										<span className="adminregister_register_Login" onClick={() => history.push('/adminlogin')}>
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