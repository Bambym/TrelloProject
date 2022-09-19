import React from 'react'
import FormContact from './FormContact.js';
import LoremContact from './LoremContact.js';
import {Grid} from '@mui/material';
const ContactContent = () => {

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <LoremContact/>
            </Grid>
            <Grid item xs={6}>
                <FormContact/>
            </Grid>
        </Grid>
    )
}

export default ContactContent
