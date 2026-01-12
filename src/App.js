import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Mission from "./component/Mission";
import Pathners from "./component/Pathners";
import Impact from "./component/Impact";
import Contactus from "./component/Contactus";
import Header from "./component/Header";

const App = () => {
  return (
      <BrowserRouter>
    <Header />
      <Routes>

        <Route path="/" element={<Dashboard />} />
          <Route path="/mission" element={<Mission />} />
                  <Route path="/pathners" element={<Pathners/>} />
                   <Route path="/impact" element={<Impact/>} />
                    <Route path="/contact-us" element={<Contactus/>} />
         
      </Routes>



      </BrowserRouter>
  )
}

export default App