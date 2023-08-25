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
    <div>
      <Header></Header>
      <MainBanner></MainBanner>
      <ClientsBanner></ClientsBanner>
      <Footer></Footer>
    </div>
  );
}

export default Home;
