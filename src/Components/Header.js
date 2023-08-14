    import React from "react";
  import {Link } from 'react-router-dom';
  import Typography from "@mui/material/Typography";
  import MenuItem from "@mui/material/MenuItem";
  import Box from "@mui/material/Box";
  import Button from "@mui/material/Button";
  import logo from "../images/EZR_Blue.png";
  import Login from "./Login.js";

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
          <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography color="#0698d2" textAlign="center" fontSize="20px">
                {page}
              </Typography>
            </MenuItem>
          ))}
          
          <Button 
                  sx={{ backgroundColor: "#0698d2" , 
                        borderRadius: "10px" }}>
          <Typography color="#ffffff" textAlign="center" fontSize="20px">
            Login
          </Typography>
          </Button>
         
        </Box>
      );
  }

  export default Header;