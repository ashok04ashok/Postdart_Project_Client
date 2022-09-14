import React from 'react'
import { Route} from "react-router-dom";
import Adminlogin from '.././containers/admin/adminlogin/Adminlogin';
import AdminRegister from '.././containers/admin/adminregister/adminregister';
import Adminforgetpassword from '../containers/admin/adminforgetpassword/Adminforgetpassword';
import Adminhome from "../containers/admin/adminhome/Adminhome";


export default function Adminroutes() {

    return (
            <>
                <Route path="/adminlogin"  component={Adminlogin} exact /> 
                <Route path="/adminregister" component={AdminRegister}  />
                <Route path="/adminlogin/userforgetpassword" component={Adminforgetpassword}  />
                <Route path="/adminlogin/adminhome" component={Adminhome} />

            </>

    );
}
