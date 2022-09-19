
import { Typography,Card,CardContent,Grid, TextField,Button } from '@mui/material';
import React, { Component } from 'react';

export class FormContact extends Component {

  render() {
    return(

        <div className="Form" style={{marginRight: "4rem" ,marginTop: "8rem",marginBottom: "20rem"}}>
        <Typography gutterBottom variant="h3" align="center">
                
                </Typography>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField label="Prénom" placeholder="Entrez votre prénom" variant="outlined" fullWidth required/>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField label="Nom" placeholder="Entrez votre Nom" variant="outlined" fullWidth required/>
                  </Grid>
                  <Grid xs={12} item>
                    <TextField label="Email" placeholder="Entrez votre Email" variant="outlined" fullWidth required/>
                  </Grid>
                  <Grid xs={12} item>
                    <TextField label="Telephone" placeholder="Entrez votre numéro" variant="outlined" fullWidth required/>
                  </Grid>
                  <Grid xs={12} item>
                    <TextField label="Message" multiline rows={4} placeholder="Entrez votre Nom" variant="outlined" fullWidth required/>
                  </Grid>
                  <Grid xs={12} item>
                    <Button  type="submit" variant="contained" color="primary" fullWidth>Envoyer</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
        </div>

    )
  }

}

export default FormContact;








