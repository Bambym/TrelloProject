import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Tache from "./Tache";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingAnimation from "../../LoadingAnimation";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  confirmEmail: yup
    .string('Enter your email')
    .oneOf([yup.ref('email')],"c'est pas le même email guys")
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Enter your password')
    .oneOf([yup.ref('password')],"c'est pas le même password guys")
    .required('Password is required'),
});

 
const SignUp = () => {
 
  const [isLoading, setIsLoading] = useState(false);

  const [signUpError,setSignUpError] = useState('');

  const handleSubmit = ({email,password}) => {

        setIsLoading(true)

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                //setTimeout(() => {
                    setIsLoading(false)
                //}, 2000);
                
            })
            .catch((error) => {
                const code = error.message;
                console.log(error)
                setIsLoading(false)
                let messageError = code === 'auth/email-already-in-use' && "L'utilisateur existe déjà"
                setSignUpError(messageError)
            });
    } 


  const formik = useFormik({
    initialValues: {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
   
    <Grid>
      <Tache />
      <Paper
        elevation={20}
        style={{
          padding: "60px 60px",
          width: 300,
          margin: "20px auto",
          borderRadius: "30px",
        }}
      >
        <Grid align="center">
          <Avatar
            style={{ backgroundColor: "#0554F2", marginBottom: "20px" }}
          ></Avatar>
          <h2 style={{ margin: 0 }}>Inscription</h2>
          <Typography variant="caption"> Veuillez créer un compte</Typography>
        </Grid>
        <form
          onSubmit={formik.handleSubmit}
          
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            type="email"
            name="email"
            style={{ marginBottom: "20px", marginTop: "20px" }}
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
         
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            type="email"
            name="confirmEmail"
            style={{ marginBottom: "20px" }}
            label="Confirmez l'email"
            value={formik.values.confirmEmail}
            onChange={formik.handleChange}
            error={formik.touched.confirmEmail && Boolean(formik.errors.confirmEmail)}
            helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}
          />
         
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            type="password"
            name="password"
            style={{ marginBottom: "20px" }}
            label="Mot de passe"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            type="password"
            name="confirmPassword"
            style={{ marginBottom: "20px" }}
            label="Confirmez le mot de passe"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          
          <Button
            type="submit"
            variant="contained"
            disable={isLoading}
            style={{
              backgroundColor: "#0554F2",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            S'inscrire
          </Button>
          <LoadingAnimation isLoading={isLoading} color = 'success' type = 'linear' />
          <Link to="/login" variant="body2">
            Vous avez déja un compte ? Connectez-vous
          </Link>
          {
            signUpError !== '' &&
            <Alert severity="error" > {signUpError} </Alert>
          }
        </form>
      </Paper>
    </Grid>
  
 
  );
};

export default SignUp;
