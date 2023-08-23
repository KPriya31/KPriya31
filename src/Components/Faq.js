import React from 'react';
import Header from './Header';
import FaqImg from "../images/faq_image.webp";
import Footer  from './Footer';
import Box from '@mui/material/Box';

export default function Faq()
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
        <img src={FaqImg} className="img-size" alt="faqs"/>
        </Box>
        <Footer/>
        </div>
    );
};