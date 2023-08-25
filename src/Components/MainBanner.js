import React from "react";
import BannerImg from "../images/BannerImg.webp";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';

function MainBanner() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: { xs: "flex" },
        alignItems: "center",
        padding :1
      }}
    >
        <div> 
        <Typography color="#000000" fontSize="32px">
          Easy and automatic(AI powered) from your shipping carriers
        </Typography>
     
   
        <TextField
          id="outlined-basic"
          label="Enter your email Address"
          variant="outlined"
          justifyContent="center"
          sx ={{height : "50px",
                width :"300px",
                padding:1
                
              }} 
        />
        <Link href="/register" style={{textDecoration : "none"}}>
        <Button sx={{ 
          backgroundColor: "#0698d2" , 
          width:"200px", 
          height:"50px",
          padding:1,
          margin:1,
          borderRadius:10,
          alignItems:"center"
        }}
        >
          <Typography color="#ffffff" textAlign="center">
            Start for Free
          </Typography>
        </Button></Link>
        <Typography color="#006400" fontSize="15px">Free forever (upto n packages / month)</Typography>
        <Typography color="#006400" fontSize="30px" alignItems="center">Never worry about late shipments
again with EZRefunds
</Typography>
        </div>
      <img src={BannerImg} alt="Banner"></img>
    </Box>
  );
}

export default MainBanner;
