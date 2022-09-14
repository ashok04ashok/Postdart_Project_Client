import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';
import { PRODUCT_API } from '../../../global/Api';


export default function Homecard({ post }) {
    const [like, setLike] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [user, setUser] = useState({})
    const [setProfile] = useState({})

    const likehandler = () => {
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }


    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${PRODUCT_API}/admin/activeuser/${post.userId}`);
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])


    useEffect(() => {
        const fetchProfile = async () => {
            const res = await axios.get(`${PRODUCT_API}/admin/activeprofile/6315a3bdb344ea680a6eaf1d`);
            setProfile(res.data)
        }
        fetchProfile()
    }, [])

    let history = useHistory();

    return (
        <div>
            <div className="home_card">

                <section >
                    <img onClick={() => history.push('/userlogin/userhome/userprofile')} className="home_card_profile"

                        src={post.photo} alt='profile' />
                    <div className="home_card_name">
                        <span>
                            <b >
                                {user.userName}
                            </b>
                            <b >
                                {/* {post.time} */}
                            </b>&nbsp;
                            <br />
                            <br />
                            <b>
                                {post.desc}
                            </b>

                        </span>

                    </div>
                </section>



                <section >
                    <div className=" home_card_profile2">
                        <img
                            src={post.photo}

                            alt='profile' />
                        <div className="home_card_profile3">

                            <span onClick={likehandler}>
                                <b>
                                    Like
                                    <span>
                                        {like}
                                    </span>
                                </b>
                            </span>
                            <span className="home_card_profile3_active">
                                <b>
                                    Comments
                                    <span>
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
                                <img className="home_card_profile4_icon" src="https://i.ibb.co/G08j5Jc/images-1.jpg" alt='profile' />
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
                            <div className="home_card_comment_input">
                                <input className="home_card_comment_input2" type="textarea" placeholder="Write a comment..." />
                                {/* <img className="home_card_comment_input_send" src="https://i.ibb.co/2NpKFNh/profile-2.jpg" alt='profile' /> */}
                                <IoMdSend className="home_card_comment_input_send" />

                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <br />
        </div>
    );
}


