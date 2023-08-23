import React from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Header from "./Header";
//import Navbar from "./NavBar";
import MainBanner from "./MainBanner";
import ClientsBanner from "./ClientsBanner";
import Footer from "./Footer.js";


function Home() {
  return (
    <AppBar position="relative">
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
    </AppBar>
  );
}

export default Home;
