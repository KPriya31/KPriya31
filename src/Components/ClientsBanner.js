import React from "react";
import ClientsImg from "../images/ClientsImg (1).webp";
import Box from "@mui/material/Box";
function ClientsBanner() {
  return (
    <Box
      sx={{
        backgroundColor: "white"
      }}
    >
      <img src={ClientsImg} alt="ClientsImage"></img>
    </Box>
  );
}

export default ClientsBanner;
