import React, { useate } from 'react'

import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import { PRODUCT_API } from "../../../global/Api";

import { useHistory } from "react-router-dom";
// import { GrUploadOption } from 'react-icons/gr';
import { BsCardImage } from 'react-icons/bs';


export default function Homeleft() {
    let history = useHistory();


    return (
        <div className="home_right_1st">


                    <form>

                        <div> <input className="home_right_input"  placeholder="Type here" />  </div>



                        <div className="home_userlist">




                            <label htmlFor="file">
                                <input className="home_right_input" style={{ display: "none" }} id="file" type="file" accept='.png,.jpeg,.jpg'  placeholder="Upload here" />
                                <input className="home_right_input" style={{ display: "none" }} id="file" type="file" accept='.png,.jpeg,.jpg'  placeholder="Upload here" />
                                <BsCardImage className="home_side_icons2" />
                            </label>
                            <span className="home_side" type="submit" onClick={() => history.push('/userlogin/userhome')}>
                                Post
                            </span>

                        </div>
                    </form>
        </div>
    );
}
