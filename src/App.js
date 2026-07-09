import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Mission from "./component/Mission";
import Pathners from "./component/Pathners";
import Impact from "./component/Impact";
import Contactus from "./component/Contactus";
import Header from "./component/Header";
import News from "./component/News";
import Signin from "./component/Auth/Signin";
import Signup from "./component/Auth/Signup";
import Completesignup from "./component/Auth/Completesignup";
import Setpin from "./component/Auth/Setpin";
import Welcome from "./component/Auth/Welcome";
import Verify from "./component/Auth/Verify";
import Words from "./component/Auth/Words";
import Pinlogin from "./component/Auth/Pinlogin";
import Home from "./component/Body/Home";
import Assets from "./component/Body/Assets";
import Profile from "./component/Body/Profile";
import Descs from "./component/Body/Descs";
import WIthdrew from "./component/Body/WIthdrew";
import Notfound from "./component/Body/Notfound";
import Forgetpassword from "./component/Body/Forgetpassword";
import Tdetails from "./component/Body/Tdetails";
import Processing from "./component/Body/Processing";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/home" element={<Home />} />
          <Route path="/withdraw" element={<WIthdrew />} />
        <Route path="/mission" element={<Mission />} />
               <Route path="/generate-reset" element={<Forgetpassword />} />
        <Route path="/pathners" element={<Pathners />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/news" element={<News />} />
        <Route path="/signin" element={<Signin />} />   
        <Route path="/signup" element={<Signup />} />
        <Route path="/encryption" element={<Completesignup />} />
        <Route path="/set-pin" element={<Setpin />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/verify-pin" element={<Pinlogin />} />
        <Route path="/verify-puzzle" element={<Words />} />
        <Route path="/verify-account" element={<Verify />} />
        <Route path="/assets" element={<Assets />} />
          <Route path="/Profile" element={<Profile />} />
    <Route path="/descs" element={<Descs />} /> 

     <Route path="/payment" element={<Tdetails />} /> 
      <Route path="/processing" element={<Processing />} /> 
     <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
