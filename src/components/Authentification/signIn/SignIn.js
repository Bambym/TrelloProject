import React , {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BgImg from "./bgImg";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import LoadingAnimation from "../../LoadingAnimation";

import { useNavigate } from "react-router-dom";


const theme = createTheme();

function SignIn() {
  
  const auth = getAuth();
  let navigate = useNavigate()

  const [isLoading,setIsLoading] = useState(false) ;
  const handleLoading = () => setIsLoading(!isLoading)

  useEffect( () => {

    onAuthStateChanged(auth,(user)=>{

      if(user){
        navigate(`/dashboard/${user.uid}`)
      } 

    })

  },[]) // => équivalent d'un componentDidMount


  // useEffect( () => {

  //   console.log("didupdate")

  // }, [isLoading]) // => équivalent d'un componentDidUpdate



  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoading()
    const data = new FormData(event.currentTarget);
    
    let email = data.get("email")
    let password = data.get("password")

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(`/dashboard/${user.uid}`)
      })
      .catch((error) => {
        handleLoading()
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ backgroundColor:'primary' }}
        component="main"
        maxWidth="xs"
      >
        <BgImg/>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow:
              "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
            borderRadius: "7%",
            zIndex: 1,
            backgroundColor:'#fff'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter Email"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Link to="#">
              Forgot password? 
            </Link>
            <Link to="/signup">
                Don't have an account? Sign Up
              </Link>

              <LoadingAnimation isLoading={isLoading} color="secondary" type="linear" />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
