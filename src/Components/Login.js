import  React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Avatar from '@mui/material/Avatar';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
//import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { useNavigate } from "react-router";
import { fetchToken , setToken } from "../Auth.js";
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        EZRefund
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
/*function Login()
{
 return(
     <div>
         <Header/>
     <h1>Login page</h1>
     <Footer/>
     </div>
 );
}*/


export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  //check to see if the fields are not empty
  const login = () => {
    if ((username == "") & (password == "")) {
      return;
    } else {
      // make api call to our backend. we'll leave this for later
      axios
        .post("http://localhost:8000/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response.data.token, "response.data.token");
          if (response.data.token) {
            setToken(response.data.token);
            navigate("/profile");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };

  return (
    <>
    <Container component="main" maxWidth="xs">
     
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
       <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {fetchToken() ? (
            <p>you are logged in</p>
          ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
           <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            
                  onChange={(e) => setPassword(e.target.value)}
          />
           <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={login}
          >
            Sign In
          </Button>
          
            
          
        </Box>
      )}
      <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </Box>
      </Container>
      <Copyright sx={{ mt: 5 }} />
    </>
    
  );
}