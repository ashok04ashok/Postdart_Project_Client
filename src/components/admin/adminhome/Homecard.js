import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Homecard() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="home_card">


                <section >
                    <img onClick={() => navigate('/userlogin/userhome/userprofile')} className="home_card_profile" src="https://i.ibb.co/2NpKFNh/profile-1.jpg" alt='profile' />
                    <div className="home_card_name">
                        <span>
                            <b>
                                John
                            </b>
                        </span>
                    </div>
                </section>



                <section >
                    <div className=" home_card_profile2">
                        <img src="https://i.ibb.co/2NpKFNh/profile-2.jpg" alt='profile' />
                        <div className="home_card_profile3">

                            <span>
                                <b>
                                    Like
                                    <span>
                                        5
                                    </span>
                                </b>
                            </span>
                            <span className="home_card_profile3_active">
                                <b>
                                    Comments
                                    <span>
                                        5
                                    </span>
                                </b>
                            </span>

                        </div>
                    </div>
                </section >


                <section>
                    <div className="home_card_comments">
                        <div className="home_card_user_comments">
                            <div>
                                <img className="home_card_profile4_icon" src="https://i.ibb.co/2NpKFNh/profile-2.jpg" alt='profile' />
                                <span className="home_card_profile4_name">
                                    Kumar
                                </span>
                                <span className="home_card_comment">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente non, harum magnam aliquid provident accusamus incidunt voluptatibus ab consectetur obcaecati. Perferendis facere dignissimos aperiam officiis, consequatur laboriosam ipsam
                                </span>
                            </div>
                        </div>

                        <div className="home_card_comment_edit">
                            <div ><img className="home_card_profile4_icon" src="https://i.ibb.co/2NpKFNh/profile-2.jpg" alt='profile' />

                            </div>
                            <div>
                                <input className="home_card_comment_input" type="textarea" placeholder="Write a comment..." />
                                <img className="home_card_comment_input_send" src="https://i.ibb.co/2NpKFNh/profile-2.jpg" alt='profile' />

                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <br />
        </div>
    );
}

