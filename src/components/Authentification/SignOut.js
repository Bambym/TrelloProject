import { Button } from '@mui/material';
import { signOut,getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {

    let navigate = useNavigate()
    const auth = getAuth()
    const handleClick = () => {
        signOut(auth)
        .then(()=>{
            navigate('/login')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return <div>
      <Button color='warning' onClick={handleClick} >
          Se déconnecter
      </Button>
  </div>;
};

export default SignOut;
