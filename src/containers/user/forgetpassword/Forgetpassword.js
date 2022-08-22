import "./forgetpassword.css"
import React from 'react'


// import { ProductAPI } from "../API/Api";

import { Field, Form, Formik } from 'formik';
import axios from "axios";
import joi from "joi";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Brand from "../../../components/common/brand/brand";


// validation registerSchema 
const forgetPasswordSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }),
    otp: joi.string().alphanum().min(6).max(6).required(),
});

export default function Userforgetpassword() {
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
                            // api call
                            try {
                                await axios.post(
                                    // `${ProductAPI}/auth/reset-password/${id}/${token}`,
                                    values
                                );
                                navigate("/userchangepasword");
                                toast.success("Reset your password successfully");
                            } catch (error) {
                                console.log(error.message);
                            }
                        }}      >

                        {({ errors, touched }) => (
                            <Form >
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

                                {/* OTP */}
                                <Field
                                    type="text"
                                    name="otp"
                                    placeholder="Enter your OTP"
                                    className="input-field"
                                />
                                {errors.confirmpPassword && touched.confirmpPassword ? (
                                    <span className="text-danger-postdart">
                                        *{errors.confirmpPassword}*
                                    </span>
                                ) : null}

                                <div name=" forget " className="forgetpassword_sign_otp" >
                                    Resend OTP
                                </div>
                              
                                {/* <button type='submit' className='forgetpassword_sign_btn' onClick={() => navigate('/changepassword')}> */}
                                <button type='submit' className='forgetpassword_sign_btn' >
                                    Confirm
                                </button>
                            </Form >
                        )}
                    </Formik >
                </div>
            </div>
        </div>
    );
}
