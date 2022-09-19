import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import { Link } from "react-router-dom";

import {
  Button,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar
} from '@mui/material';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#0554F2'
};
const useStyles = makeStyles({
  root: {
      color :"#0554F2",
      backgroundColor: '#F1F8FF',
      boxShadow: '2px 2px 10px -2px #F1F1FF,\n 32px 32px 100px -200px #F1F1FF ', 
  },
});

const Header = ({children}) => {
  const classes = useStyles();
  
  return (

    <Box 
    
    sx={{ flexGrow: 1 }} >

      <AppBar 
      className={classes.root}
      position="static">
        

        <Toolbar color="#b3e5fc">
          {children}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trello clone
          </Typography>
          <Button 
              variant="s'inscrire" 
              sx={{display: { xs:"none", md: 'block', sm: "none", lg: 'block' }}} 
              >
           <Link to='/login' style={linkStyle}>S'identifier</Link>
              </Button>
              <Link to='/login'>
              <VpnKeyOutlinedIcon 
              sx={{display: { sm: 'block', md: 'none' , lg: 'none'}, margin:2 }} 
              />
              </Link>
          <Button 
              variant="creer compte" 
              sx={{display: { xs:"none",md: 'block', sm: "none", lg: 'block' }}} 
              >
              <Link to='/signup' style={linkStyle}>Créer un nouveau compte</Link>
              </Button>  
              <Link to='/signup'>
              <CardMembershipOutlinedIcon 
              sx={{display: { sm: 'block',md: 'none', lg: 'none' }}} 
              />        
              </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
