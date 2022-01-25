import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import "../../css/style-dashboard.css"
import SignOut from "../Authentification/SignOut";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#0554F2",
};
const useStyles = makeStyles({
  root: {
    color: "#0554F2",
    backgroundColor: "#F1F8FF",
    boxShadow: "2px 2px 10px -2px #F1F1FF,\n 32px 32px 100px -200px #F1F1FF ",
    display: "flex",
    
  },
});

const categoryHeader = ['Espace', 'Recents', 'Favoris','Modeles'];


const HeaderDashboard = ({ children }) => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.root} position="static">
        <Toolbar className="toolbar-dash" color="#b3e5fc">
          {children}

          <Typography variant="h6" component="div" sx={{ mr: 1 }}>
            Trello clone
          </Typography>
         <Box className="select"> 
         
         {categoryHeader.map((category)=>(
          
          <FormControl variant="standard" sx={{ m: 2, minWidth: 120}}>
            <InputLabel id={category}>{category}</InputLabel>
            <Select
              labelId={category}
              id={category}
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
         
          ))} 
          </Box>
          {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Récents</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Favoris</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120, mr: 30 }}>
            <InputLabel id="demo-simple-select-filled-label">Modèles</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          <div className="buttonHeaderDashBoard">
          <Button
            variant="text"
            sx={{
              display: { xs: "none", md: "block", sm: "none", lg: "block" },
              ml: 2,
              
            }}
          >
          <NotificationsActiveIcon/> 
          </Button>
          
          
          <Button
            variant="text"
            sx={{
              display: { xs: "none", md: "block", sm: "none", lg: "block" },
            }}
          >
          <MessageIcon/> 

          </Button>
          <SignOut/>
          </div> 
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderDashboard;
