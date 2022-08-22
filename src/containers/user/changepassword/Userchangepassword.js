import "./userchangepassword.css"

// import { ProductAPI } from "../API/Api";

import { Formik, Field, Form } from "formik"
import joi from "joi";
import axios from "axios"
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Brand from "../../../components/common/brand/brand";


// validation registerSchema 
const changePasswordSchema = joi.object({
    password: joi.string().alphanum().min(3).max(60).required(),
    confirmPassword: joi.ref('password')
})

export default function Userchangepassword() {
    
    const navigate = useNavigate();

    return (
        <div>
            <div className=">passwordchange_page">
                <Brand/>

                <div className="passwordchange_main">
                    <div className="passwordchange_form">

                        <Formik
                            initialValues={{
                                password: "",
                                confirmpPassword: "",
                            }}
                            validationSchema={changePasswordSchema}
                                onSubmit={async (values) => {
                                    // api call
                                    try {
                                      await axios.post(
                                        // `${ProductAPI}/auth/reset-password/${id}/${token}`,
                                        values
                                      );
                                      navigate("/userlogin");
                                      toast.success("Reset your password successfully");
                                    } catch (error) {
                                      console.log(error.message);
                                    }
                                  }} >

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
                                        <span className="text-danger-postdart">
                                            *{errors.password}*
                                            </span>
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
                                        <span className="text-danger-postdart">
                                            *{errors.confirmpPassword}*
                                            </span>
                                    ) : null}

                                    {/* <button type='submit' className='passwordchange_sign_btn' onClick={() => navigate('/login')}> */}
                                    <button type='submit' className='passwordchange_sign_btn' >
                                        Confirm
                                        </button>
                               </Form >
                           )}
                        </Formik >
                    </div>
                </div>
            </div>
        </div>
    );
}
