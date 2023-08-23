import React from "react";
import {Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home.js";
import Profile from "./Components/Profile";
import HowItWorks from "./Components/HowItWorks.js";
import Pricing from "./Components/Pricing";
import Faq from "./Components/Faq";
import About from './Components/About';
import { RequireToken } from './Auth';

function App() {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" 
               element={
                        <RequireToken>
                        <Profile/>
                        </RequireToken>
                       }>

        </Route>
        <Route path="/how-it-works" element={<HowItWorks/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/faqs" element={<Faq/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
   /* <AppBar position="static">
     
        
        
        <div>
          <Header></Header>
        </div>
        <div>
          <MainBanner></MainBanner>
        </div>
        <div>
          <ClientsBanner></ClientsBanner>
        </div>
        <div>
          <Footer></Footer>
        </div>
        
       
      
    </AppBar>  */
    );
}

export default App;
