import React, { Component } from 'react';
import {Typography,Grid} from '@mui/material';


export class LoremContact extends Component {

  render() {
    return(
        <Typography gutterBottom variant="h3" align="left" marginTop="2rem" marginLeft="4rem" color="#0554F2"> 
                <img src="https://fontmeme.com/permalink/220113/d4144e0f892b1890989b91da0fcf9aad.png" alt="police-outfit" border="0"/>
                <br></br>
                <br></br>
                <Grid fontSize="22px" fontWeight="bold">Service Client</Grid>
                <br></br>
                <Grid fontSize="18px" fontWeight="bold"> Email: xxxxx@outlook.com</Grid>
                <br></br>
                <Grid fontSize="18px" fontWeight="bold"> Telephone: 07 XX XX XX XX XX</Grid>
                <br></br>
                <Grid fontSize="16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer
                </Grid>
        
        </Typography>


    )
  }

}

export default LoremContact;