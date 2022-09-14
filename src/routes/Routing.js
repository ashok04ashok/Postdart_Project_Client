import React from 'react'
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Adminroutes from './Adminroutes';

// import Adminroutes from './Adminroutes';
import Commonroutes from './Commonroutes';
import Userroutes from './Userroutes';

export default function Routing() {
    return (
        <BrowserRouter>
            <Commonroutes />
            <Adminroutes />
            <Switch>
                <Userroutes />
            </Switch>
        </BrowserRouter>
    );
}
