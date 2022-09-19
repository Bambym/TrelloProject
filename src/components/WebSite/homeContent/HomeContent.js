
import CommentsCard from './CommentsCard';
import CentralCard from './CentralCard';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { flexbox } from '@mui/system';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#056CF2',
    
};

function HomeContent() {
    return (
        <div className="central-card">
            <Container maxWidth="false"  >
                <h1>TRELLO CLONE</h1>
                <Grid container center >

                    <Grid xs={12} sm={12} md={8}  >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <CentralCard />
                            <CentralCard >
                               
                                    
                                    <Button variant="outlined"><Link to='/signup' style={linkStyle}>Inscrivez-vous <br/>c'est gratuit</Link></Button>
                                
                            </CentralCard>
                        </Stack>
                    </Grid>
                    <Grid justify="center" alignItems="center" spacing={2} xs={12} sm={12} md={4}>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <CommentsCard />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}



export default HomeContent;