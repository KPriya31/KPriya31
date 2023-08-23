import React from "react";
import Link  from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../images/EZR_Blue.png";

/*{pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography color="#0698d2" textAlign="center" fontSize="20px">
              {page}
            </Typography>
          </MenuItem>
        ))} */ 
const pages = ["How it works", "Pricing", "FAQs", "Contact Us", "About"];

function Header (){
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
    return(
<Box
        sx={{
          backgroundColor: "white",
          display: { xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          padding:1
          
        }}
      >
        <Link href="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link href="/how-it-works" style={{textDecoration : "none"}}>
        <MenuItem>
            <Typography color="#0698d2" textAlign="center" fontSize="20px">
              How It Works
            </Typography>
          </MenuItem> 
        </Link>
        <Link href="/pricing" style={{textDecoration : "none"}}>
        <MenuItem>
            <Typography color="#0698d2" textAlign="center" fontSize="20px">
              Pricing
            </Typography>
          </MenuItem> 
        </Link>
        <Link href="/faqs" style={{textDecoration : "none"}}>
        <MenuItem>
            <Typography color="#0698d2" textAlign="center" fontSize="20px">
              FAQs
            </Typography>
          </MenuItem> 
        </Link>
        <Link href="/" style={{textDecoration : "none"}}>
        <MenuItem>
            <Typography color="#0698d2" textAlign="center" fontSize="20px">
              Contact Us
            </Typography>
          </MenuItem> 
        </Link>
        <Link href="/About" style={{textDecoration : "none"}}>
        <MenuItem>
            <Typography color="#0698d2" textAlign="center" fontSize="20px">
              About
            </Typography>
          </MenuItem> 
        </Link>
       
        <Link href="/login" style={{textDecoration : "none"}}>
        <Button 
                sx={{ backgroundColor: "#0698d2" , 
                      borderRadius: "10px" }}>
        <Typography color="#ffffff" textAlign="center" fontSize="20px">
          Login
        </Typography>
        </Button></Link>
       
      </Box>
    );
}

export default Header;