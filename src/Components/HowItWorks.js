import React from 'react';
import Header from './Header';
import Howitworks from "../images/Howitworks.webp";
import Footer  from './Footer';
import Box from "@mui/material/Box";
import {Typography }from "@mui/material";

export default function HowItWorks()
{
    return(
        <div>
        <Header/>
    <Box sx={{
        backgroundColor: "white",
        display: { xs: "flex" },
        alignItems: "center",
        padding :1
      }}>
        <img src={Howitworks} className="img-size" alt="working"/>
        <Typography>How it works TBA</Typography>
        </Box>
        <Footer/>
        </div>
    );
};