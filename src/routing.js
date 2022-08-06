import React from "react";
import { Route,Routes } from "react-router";
import Entrance from "./containers/Entrance";

import Educaterlogin from "./containers/Educaterlogin";
import Educaterregister from "./containers/Educaterregister";
import Forgetpassword from "./containers/Forgetpassword";
import Changepassword from "./containers/Changepassword";
import Userlogin from "./containers/Userlogin";
import Userregister from "./containers/Userregister";
import About from "./containers/About"
import Contact from "./containers/Contact"
import Notification from "./containers/Notification"
import Home from "./containers/Home"
import Profile from "./containers/profile";

function Routing() {
    return (

        <Routes>
            <Route path="/entrance" element={<Entrance />} />
            <Route path="/about" element={< About/>} />
            <Route path="/contact" element={< Contact/>} />
            <Route path="/" element={<Educaterlogin />} />
            <Route path="/educaterlogin" element={<Educaterlogin />} />
            <Route path="/userlogin" element={<Userlogin />} />
            <Route path="/educaterregister" element={<Educaterregister />} />
            <Route path="/userregister" element={<Userregister />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/changepassword" element={<Changepassword />} />
            <Route path="/home" element={< Home/>} />
            <Route path="/profile" element={< Profile/>} />
            <Route path="/notification" element={< Notification/>} />
            <Route path="*" element={<Educaterlogin />} />

        </Routes>

    );
}
export default Routing;