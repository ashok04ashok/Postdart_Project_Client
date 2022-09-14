import React from 'react'
import { Route } from "react-router-dom";
import Landing from '../containers/common/Landing/Landing';
import About from '../containers/common/about/About';
import Contact from '../containers/common/contact/Contact';
export default function Commonroutes() {
  return (
    <>
      <Route path="/" component={Landing} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      </>
  );
}

