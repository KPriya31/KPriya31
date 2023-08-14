import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Footer(){
    return(
        <Box sx={{
            backgroundColor: "white",
            display: { xs: "flex" },
            alignItems: "center",
            padding :1
          }}>
            <Typography color="#000000" fontSize="12px"> © Copyrights EZRefunds 2023</Typography>
        </Box>
    );
}

export default Footer;