import React from 'react';
import Header from './Header';
import PricingImg from "../images/pricing.webp";
import Footer  from './Footer';
import Box from "@mui/material/Box";

export default function Pricing()
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
        <img src={PricingImg} className="img-size" alt="cost"/>
        </Box>
        <Footer/>
        </div>
    );
};