import "./contact.css"
import React from 'react'


import { useNavigate } from "react-router-dom";
import joi from "joi";
import { Field, Form, Formik } from "formik";
import { toast } from 'react-toastify';
import Brand from "../../../components/common/brand/brand"

export default function Contact() {


    const contactSchema = joi.object({
        fullName: joi.string().alphanum().min(3).max(60).trim(false).required(),
        mobileNumber: joi.string().min(10).length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
        email: joi.string().email({ tlds: { allow: false } }),
        textArea: joi.string().alphanum().min(3).max(1000).required("Please enter your password"),
    });



    const navigate = useNavigate();
    return (
        <div >
            <div className="contact_page">
                <Brand />
                <div className="contact_main">

                    <div className="contact_form">



                        <Formik
                            initialValues={{
                                fullName: "",
                                mobileNumber: "",
                                email: "",
                                textArea: "",
                            }}
                            validationSchema={contactSchema}
                            onSubmit={async (values) => {
                                try {
                                    // await axios.post(`${ProductAPI}/auth/register`, values);
                                    navigate("/login");
                                    toast.success("conatct Successfull");
                                } catch ({ response: { data } }) {
                                    toast.error(data.error);
                                }
                            }}
                        >
                            {({ errors, touched }) => (

                                <Form >

                                    <Field type="text" name="fullName" className="input-field" placeholder="Your Fullname" />
                                    <Field type="text" name="mobileNumber" className="input-field" placeholder="+91" />
                                    <Field type="text" name="email" className="input-field" placeholder="Email" />
                                    <Field type="text" name="textArea" className="input-field contact_textarea" placeholder="Write something...." />

                                    {/* <button type='submit' className='forgetpassword_sign_btn' onClick={navigate('/educaterlogin')} >Confirm</button> */}
                                    <button type='submit' className='forgetpassword_sign_btn'  >Confirm</button>


                                </Form >
                            )}
                        </Formik >

                    </div>
                </div>
            </div>
        </div>
    );
}
