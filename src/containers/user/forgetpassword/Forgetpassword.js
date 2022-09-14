import "./forgetpassword.css"
import React from 'react'


// import { ProductAPI } from "../API/Api";

import { Field, Form, Formik } from 'formik';
import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import Brand from "../../../components/common/brand/brand";
import { PRODUCT_API } from "../../../global/Api";


// validation registerSchema 
const userEmailSchema = Yup.object().shape({
        email: Yup.string().email().required(),
      });
   

export default function Userforgetpassword() {
    let history = useHistory();
    return (
        <div>
            <Brand />
            <div className="forgetpassword_main">
                <div className="forgetpassword_form">

                    <Formik
                        initialValues={{
                          email: "",
                          
                        }}
                        validationSchema={userEmailSchema}
                        onSubmit={async (values) => {
                            console.log(values)
                            // api call
                            try {
                                await axios.post(`${PRODUCT_API}/userauth/resetpassword`, values);
                                history.push();
                                toast.success("please check your Email ID");
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



                                {/* <button type='submit' className='forgetpassword_sign_btn' onClick={() => history.push('/changepassword')}> */}
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
