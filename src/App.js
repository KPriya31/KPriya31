import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Header from "./Components/Header";
import MainBanner from "./Components/MainBanner";
import ClientsBanner from "./Components/ClientsBanner";
import Footer from "./Components/Footer";

function App() {
  return ( 
    <AppBar position="static">
     
        
        
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
        
       
      
    </AppBar>  );
}

export default App;
