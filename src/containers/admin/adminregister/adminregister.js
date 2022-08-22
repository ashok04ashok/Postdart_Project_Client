import "./adminregister.css"
import React from 'react'


import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import { PRODUCT_API } from "../../../global/Api";
import Brand from "../../../../src/components/common/brand/brand";


export default function AdminRegister() {

	// validation AdminregisterSchema 
	const AdminregisterSchema = Yup.object().shape({
		adminName: Yup.string().required(),
		email: Yup.string().email().required(),
		password: Yup.string().required("Please enter your password"),
		cPassword: Yup.string()
			.required("Please retype your password.")
			.oneOf([Yup.ref("password")], "Your passwords do not match."),
	});



	const navigate = useNavigate();
	return (
		<div>
			<div className="adminregister_page">
				<Brand />
				{/* toast */}
				<span onLoad={toast(`welcome to Admin Register`, {
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

				<div className="adminregister_main">
					<div className="adminregister_form">
						<button className="adminregister_btn1" >ADMIN</button>
						<button className="adminregister_btn2" onClick={() => navigate('/userregister')}>USER</button>
						<Formik
							initialValues={{
								adminName: '',
								email: '',
								password: '',
								cPassword: '',
							}}
							validationSchema={AdminregisterSchema}
							onSubmit={async (values) => {
								try {
									await axios.post(`${PRODUCT_API}/adminauth/register`, values);
									navigate("/adminlogin");
									toast.success("Registration Successfull")
								} catch ({ response: { data } }) {
									toast.error("already availble user")

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

									<button type="submit" className="adminregister_sign_btn" >
										Register
									</button>
									<br />
									<br />

									<p className="adminregister_register_link">
										Already a User?
										<span className="adminregister_register_Login" onClick={() => navigate('/adminlogin')}>
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