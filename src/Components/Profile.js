import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../images/EZR_Blue.png";
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

/*function Profile()
{
 return(
     <div>
         <Header/>
     <h1>Profile page</h1>
     <Footer/>
     </div>
 );
}*/

export default function Profile(){
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("temitope");
        navigate("/");
      };
      return (
        <>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <div style={{ marginTop: 20, minHeight: 70 }}>
            <h1>Profile page</h1>
            <p>Hello there, welcome to your profile page</p>
    
            <Button onClick={signOut}>sign out</Button>
          </div>
          <Footer/>
        </>
      );
};