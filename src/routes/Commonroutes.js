import React from 'react'
import { Route, Routes} from "react-router";

import Landing from '../containers/common/Landing/Landing';
import About from '../containers/common/about/About';
import Contact from '../containers/common/contact/Contact';

export default function Commonroutes() {
  return (
    <Routes>
      <Route path="/"element={<Landing />} />
      {/* <Route  path="*" element={<Landing />} /> */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/about" element={< About />} />
      <Route path="/contact" element={< Contact />} />
    </Routes>
  );
}

