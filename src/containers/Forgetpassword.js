import React from 'react';

import "../../src/css/forgetpassword.css"

import { useNavigate } from "react-router-dom";
import { Brand } from '../components/brand';
import { Field, Form, Formik } from 'formik';
import axios from "axios"
import joi from "joi";




// validation registerSchema 
const forgetPasswordSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }),
    otp: joi.string().alphanum().min(6).max(6).required(),
});


function Forgetpassword() {
    const navigate = useNavigate();

    return (
        <div>
            <Brand />
            <div className="forgetpassword_main">
                <div className="forgetpassword_form">


                    <Formik
                        initialValues={{
                            password: "",
                            confirmpPassword: "",
                        }}
                        validationSchema={forgetPasswordSchema}
                        onSubmit={async (values) => {
                            try {

                                // await axios.post(`${ProductAPI}/auth/register`, values);
                                await axios.post(`http://localhost:3000/changepassword`, values);
                                console.log(values);
                                navigate("/login");
                            } catch (error) { }
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form >


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



                                {/* OTP */}
                                <div>
                                    <Field
                                        type="text"
                                        name="otp"
                                        placeholder="Enter your OTP"
                                        className="input-field"
                                    />
                                </div>

                                {errors.confirmpPassword && touched.confirmpPassword ? (
                                    <span className="text-danger text-start">*{errors.confirmpPassword}*</span>
                                ) : null}

                                <div name=" forget " className="forgetpassword_sign_otp" onClick={() => navigate('login')}> Resend OTP</div>


                                <button type='submit' className='forgetpassword_sign_btn' onClick={() => navigate('/changepassword')}>Confirm</button>

                            </Form >
                        )}

                    </Formik >
                </div>
            </div>
        </div>



    );




}
export default Forgetpassword;