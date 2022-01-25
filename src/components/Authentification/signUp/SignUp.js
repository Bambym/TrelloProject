import React, { useState } from 'react';
import { Grid, Paper,Avatar,Typography,TextField,Button} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Tache from './Tache';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoadingAnimation from '../../LoadingAnimation';

import { useNavigate } from "react-router-dom";

const SignUp=()=>{

    let navigate = useNavigate()

    const [isLoading,setIsLoading] = useState(false) ;


    const handleSubmit = (event) => {
        event.preventDefault()
        let data = new FormData(event.currentTarget)
        let email = data.get('email')
        let confirmEmail = data.get('confirmEmail')
        let password = data.get('password')
        let confirmPassword = data.get('confirmPassword')

        if(email===confirmEmail && password === confirmPassword) {
            setIsLoading(true)

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const {user} = userCredential
                navigate(`/dashboard/${user.uid}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode,errorMessage)

                setIsLoading(false)
            })

        } else {

        }

    }



    return(

        <Grid>
            <Tache/>
            <Paper elevation={20} style={{padding:'60px 60px',width:300,margin:"20px auto",borderRadius:'30px'}}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor:'#0554F2',marginBottom:'20px'}}>

                    </Avatar>
                <h2 style={{margin:0}} >Inscription</h2>
                <Typography variant='caption'> Veuillez créer un compte</Typography>
                </Grid>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <TextField 
                        InputProps={
                            {startAdornment: <InputAdornment position="start">
                                            <PersonIcon   />
                                        </InputAdornment>}
                        }
                        style={{marginBottom:'20px',marginTop:'20px'}} 
                        label='Email' 
                        type="email"
                        name='email'
                    />
                    <TextField 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <PersonIcon   />
                        </InputAdornment>
                        ),
                        }}
                        type="email"
                        name='confirmEmail'
                    style={{marginBottom:'20px'}} label="Confirmez l'email"/>
                    <TextField 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <LockIcon />
                        </InputAdornment>
                        ),
                        }}
                        type="password"
                        name='password'
                    style={{marginBottom:'20px'}} label='Mot de passe'/>
                    <TextField
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <LockIcon />
                        </InputAdornment>
                        ),
                        }}
                        type="password"
                        name='confirmPassword'
                     style={{marginBottom:'20px'}} label='Confirmez le mot de passe'/>
                    <Button type="submit" variant='contained' disabled={isLoading} style={{backgroundColor:'#0554F2',borderRadius:'10px', marginTop:'10px'}}>S'inscrire</Button>
                    
                    <LoadingAnimation isLoading={isLoading} color='success' type='linear' />
                    
                    <Link to="/login" >
                    {"Vous avez déja un compte ? Connectez-vous"}</Link>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;