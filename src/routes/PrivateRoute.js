import React from "react";
import { Route, useHistory } from "react-router-dom";

export default function PrivateRoute({ path, component: Component }) {
    let history = useHistory();

    return (
        <Route
            path={path}
            render={()=>{
                const authToken = window.localStorage.getItem("authToken");
                return authToken ? <Component /> : history.push("/") ;
            }} />
    )
}