import "./contact.css"
import React from 'react'
import { useHistory } from "react-router-dom";
import Brand from "../../../components/common/brand/brand"

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { PRODUCT_API } from "../../../global/Api";



export default function Contact() {


    const contactSchema = Yup.object().shape({
        fullName: Yup.string().required(),
        contactNumber: Yup.number().required(),
        email: Yup.string().email().required(),
        write: Yup.string().min(3).required(),
    });

    let history = useHistory();

    return (

        <div >
            <div className="contact_page">
                <Brand />
                <div className="contact_main">

                    <div className="contact_form">



                        <Formik
                            initialValues={{
                                fullName: "",
                                contactNumber: "",
                                email: "",
                                write: "",
                            }}
                            validationSchema={contactSchema}
                            onSubmit={async (values) => {

                                try {
                                    await axios.post(`${PRODUCT_API}/help`, values);
                                    history.push("/");
                                    alert("contact create Successfull")
                                } catch ({ response: { data } }) {
                                    toast.error(data.error);
                                }
                            }}
                        >
                            {({ errors, touched }) => (

                                <Form >
                                    {/* fullName */}
                                    <Field
                                        type="text"
                                        name="fullName"
                                        placeholder="your FullName"
                                        className="input-field"
                                    />

                                    {errors.fullName && touched.fullName ? (
                                        <span className="text-danger-postdart">
                                            *{errors.fullName}*
                                        </span>
                                    ) : null}

                                    {/* contactNumber */}
                                    <Field
                                        type="text"
                                        name="contactNumber"
                                        placeholder="+91"
                                        className="input-field"
                                    />

                                    {errors.contactNumber && touched.contactNumber ? (
                                        <span className="text-danger-postdart">
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
                                        <span className="text-danger-postdart">
                                            *{errors.email}*
                                        </span>
                                    ) : null}

                                    {/* write */}
                                    <Field
                                        type="text"
                                        name="write"
                                        placeholder="Write something...."
                                        className="input-field"
                                    />

                                    {errors.write && touched.write ? (
                                        <span className="text-danger-postdart">
                                            *{errors.write}*
                                        </span>
                                    ) : null}

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
