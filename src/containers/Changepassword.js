import React from 'react';
import { useNavigate } from "react-router-dom";

import { Formik, Field, Form } from "formik"
import joi from "joi";
import axios from "axios"

import { Brand } from '../components/brand';
import "../../src/css/changepassword.css"


// validation registerSchema 
const changePasswordSchema = joi.object({
    password: joi.string().alphanum().min(3).max(60).required(),
    confirmPassword: joi.ref('password')
})




function Changepassword() {

    const navigate = useNavigate();

    return (

        <div>


            <div className=">passwordchange_page">
                <Brand />
                <div className="passwordchange_main">
                    <div className="passwordchange_form">
                        <Formik
                            initialValues={{
                                password: "",
                                confirmpPassword: "",
                            }}
                            validationSchema={changePasswordSchema}
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

                                    {/* password */}
                                    <div>
                                        <Field
                                            type="text"
                                            name="password"
                                            placeholder="Enter your Password"
                                            className="input-field"
                                        />
                                    </div>

                                    {errors.password && touched.password ? (
                                        <span className="text-danger text-start">*{errors.password}*</span>
                                    ) : null}



                                    {/*confirm password */}
                                    <div>
                                        <Field
                                            type="text"
                                            name="confirmPassword"
                                            placeholder="Enter your confirm Password"
                                            className="input-field"
                                        />
                                    </div>

                                    {errors.confirmpPassword && touched.confirmpPassword ? (
                                        <span className="text-danger text-start">*{errors.confirmpPassword}*</span>
                                    ) : null}

                                    <button type='submit' className='passwordchange_sign_btn' onClick={() => navigate('/login')}>Confirm</button>
                                </Form >
                            )}

                        </Formik >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Changepassword;