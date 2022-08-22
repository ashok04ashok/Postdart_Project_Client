import React from 'react'
import { Route, Routes } from "react-router";
// import Adminhome from '.././containers/admin/adminhome/Adminhome';
import Adminlogin from '.././containers/admin/adminlogin/Adminlogin';
import AdminRegister from '.././containers/admin/adminregister/adminregister';


export default function Adminroutes() {

    return (
            <Routes>
                <Route path="/adminlogin" element={<Adminlogin />} />
                <Route path="/adminregister" element={<AdminRegister />} />
                {/* <Route path="/adminlogin/adminhome" element={<Adminhome />} /> */}
            </Routes>

    );
}
