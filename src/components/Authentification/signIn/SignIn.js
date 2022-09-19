import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BgImg from "./bgImg";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,

} from "firebase/auth";
import LoadingAnimation from "../../LoadingAnimation";
import { useFormik } from "formik";
import * as yup from "yup";
import GoogleSignIn from "./GoogleSignIn";

const theme = createTheme();

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export function SignIn() {
  const auth = getAuth();
  let navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState(false);

  const [signInError, setSignInError] = useState("");
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigate(`/admin/${uid}`)
        // ...
      } 
    });
  },[]) // equivalent d'un componentDidMount
  // useEffect(()=>{

  // },[isLoading]) // equivalent d'un componentDidUpdate
  
  
  const handleSubmit = ({ email, password }) => {
    setIsLoading(true);
   
    // const data = new FormData(event.currentTarget);
    // console.log(data);
    // // console.log({
    // //   email: data.get("email"),
    // //   password: data.get("password"),
    // // });
    // let email= data.get("email")
    // let password= data.get("password")
    
    
    
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setIsLoading(false);
      navigate(`/admin/${user.uid}`)
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsLoading(false);
      setSignInError(errorMessage);
      console.log(errorMessage);
    });
    
    
    
  };
  
  
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{ backgroundColor: "primary" }}
        component="main"
        maxWidth="xs"
      >
        <BgImg />
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
            backgroundColor: "#fff",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
              disable={isLoading}
            >
              Sign In
            </Button>
            
            <LoadingAnimation
              isLoading={isLoading}
              color="secondary"
              type="linear"
            />
            <Link to="/" variant="body2">
              Forgot password?
            </Link>

            <Link to="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
            {signInError !== "" && (
              <Alert severity="error"> {signInError} </Alert>
            )}
          </Box>

          <GoogleSignIn />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
