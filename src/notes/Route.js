import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Login from "./containers/Educaterlogin";
import Register from "./containers/Educaterregister";
import Forgetpassword from "./containers/Forgetpassword";
import Changepassword from "./containers/Changepassword";
import About from "./containers/About"
import Contact from "./containers/Contact"
import Notification from "./containers/Notification"
import Home from "./containers/Home"
import Profile from "./containers/profile";
import Message from "./containers/Message";
import Landing from "./containers/Landing";
import Profilephoto from "./containers/Profilephoto";

function App() {

    return (
        <Switch>
            <Route path="/" component={<Landing />} />

            <Route
                path="login"
                render={() => {
                    const authToken = window.localStorage.setItem("authToken");
                    authToken ? useHistory("/home") : <Login />
                }}
                exact
            />

            <Route path="/login/contact" component={< Contact />} />
            <Route path="/login/about" component={< About />} />

            <Route path="/register" component={<Register />} />
            <Route path="/register/forgetpassword" component={<Forgetpassword />} />
            <Route path="/register/changepassword" component={<Changepassword />} />

            <Route path="/login/home" component={< Home />} />
            <Route path="/login/home/profile" component={< Profile />} />
            <Route path="/login/home/profile/photo" component={< Profilephoto />} />
            {/* <Route path="/home/userprofile" component={< Userprofile />} /> */}
            <Route path="/login/home/notification" component={< Notification />} />
            <Route path="/login/home/message" component={< Message />} />

            <Route path="*" render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
    );
}
export default App;