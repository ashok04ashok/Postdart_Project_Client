import React from "react";
import { Route, Redirect } from "react-router-dom";
//or //useHistory push //import {  Route, Switch, useHistory } from "react-router-dom";    //
//or //redirect push //import { Redirect, Route, Switch } from "react-router-dom";

//path is not change so (path)   and component only change so (component: Component) assgin
export default function PrivateRoute({ path, component: Component }) {

    return (
        <Route
            path={path}
            render={()=>{
                const authToken = window.localStorage.setItem("authToken");
                return authToken ? <Component /> : <Redirect to="/login" />
                //or  // Redirect // return authToken ? <Component /> : <Redirect to"/login"/>
                //or  // useHistory push // return authToken ? <Component /> : history.push ("/login")
                
            }} />
    )
}