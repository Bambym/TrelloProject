import React from 'react';
import {
    
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    
  } from "firebase/auth";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    
    let navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleSignIn = ()=>{

      signInWithPopup(auth,provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate(`/admin/${user.uid}`)  
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    
  
    return <Button onClick={handleGoogleSignIn}>Inscription via Google</Button>
};
export default GoogleSignIn