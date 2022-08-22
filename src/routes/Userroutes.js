import React from 'react'
import { Route, Routes } from "react-router";


import Userlogin from "../../src/containers/user/userlogin/Userlogin";
import UserRegister from "../../src/containers/user/userregister/userregister";
import Forgetpassword from '../../src/containers/user/forgetpassword/Forgetpassword';
import Userchangepassword from '../../src/containers/user/changepassword/Userchangepassword';
import Userhome from "../../src/containers/user/userhome/Userhome";
import Message from "../../src/containers/user/Message/Message";
import Notification from "../../src/containers/user/Notification/Notification";
import Profilephoto from "../../src/containers/user/Profilephoto/Profilephoto";
import Userprofile from "../../src/containers/user/userprofile/Userprofile";


export default function Userroutes() {

    return (
            <Routes>
                <Route path="/userlogin" element={<Userlogin/>} />
                <Route path="/userregister" element={<UserRegister />} />

                <Route path="/userlogin/userforgetpassword" element={<Forgetpassword />} />
                <Route path="/userlogin/userchangepassword" element={<Userchangepassword />} />

                <Route path="/userlogin/userhome" element={<Userhome />} />
                <Route path="/userlogin/userhome/message" element={<Message />} />
                <Route path="/userlogin/userhome/notification" element={<Notification />} />
                <Route path="/userlogin/userhome/userprofile/photo" element={<Profilephoto />} />
                <Route path="/userlogin/userhome/userprofile" element={<Userprofile />} />
            </Routes>
    );
}
