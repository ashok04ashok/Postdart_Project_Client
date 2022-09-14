import React from 'react'
import { Route ,Redirect} from "react-router-dom";


//user
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
    <>
      <Route path="/userlogin" component={Userlogin} exact />
      <Route path="/userlogin/userhome/" component={Userhome} exact />
      <Route path="/userregister" component={UserRegister} exact />
      <Route path="/userlogin/userforgetpassword" component={Forgetpassword} exact />
      <Route path="/userlogin/userchangepassword" component={Userchangepassword} exact />

      <Route path="/userlogin/userhome/message" component={Message} exact />
      <Route path="/userlogin/userhome/notification" component={Notification} exact />
      <Route path="/userlogin/userhome/userprofile" component={Userprofile} exact />
      <Route path="/userlogin/userhome/userprofile/photo" component={Profilephoto} exact />

    
    </>
      );
}
