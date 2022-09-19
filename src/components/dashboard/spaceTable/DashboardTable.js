import React, {useState} from "react";
import HeaderDashboardTable from "./HeaderDashboardTable";
import NavBar from "../../WebSite/sideBar/NavBar";
import { Tab, Grid, Typography } from "@mui/material";
import TabPanel from "../../WebSite/sideBar/TabPanel";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { TabsRoutesDashboardTable } from "../tabsConfigDashboard";
import "../../../css/style-dashboard.css"
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider } from "@mui/styles";
import { Link, useParams } from "react-router-dom";
const drawerWidth = 240;


const DashboardTable = ({window}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const params = useParams()

  const handleChange = (event, id) => {
    setActiveTab(id);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    
    <div>
      <Toolbar />
      

      
      <NavBar activeTab={activeTab} handleChange={handleChange}>
      
        {TabsRoutesDashboardTable().map((tab, index) => (
          <Tab
            sx={{ width: { sm: drawerWidth },mt: 10,color: "white"}}
            icon={tab.icon}
            iconPosition="start"
            label={tab.label === 'Espaces' ? <Link to={`/admin/${params.uid}`} style={{textDecoration: "inherit",color:"white"}}><Box >Espaces</Box></Link>: tab.label}
            id={`vertical-tab-${index}`}
            aria-controls={`vertical-tabpanel-${index}`}

          />
         
            
         
        ))}
      </NavBar>
    </div>
  );
  
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    
    
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <HeaderDashboardTable>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </HeaderDashboardTable>

        {/* <Toolbar>
                      <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{ mr: 2, display: { sm: 'none' } }}
                      >
                          <h1>Menu icon</h1>
                      </IconButton>
                      <Typography variant="h2" noWrap component="div">
                          Trello Clone
                      </Typography>
                  </Toolbar> */}
      </AppBar>
      <Box
        component="nav"
        sx={{
          paddingTop: 10,
          width: { sm: 0, md: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Grid 
        md={12} 
        lg={12} 
        sx={{
            m: 1
        }}
        maxWidth={"100%"}
        
        >

          {/* contenu des onglets */}
          <div>
            {TabsRoutesDashboardTable().map((tab, index) => (
              <TabPanel activeTab={activeTab} index={index} >
                {tab.component}
              </TabPanel>
            ))}
          </div>
        </Grid>
      </Box>
    </Box>
    
  )
}
export default DashboardTable;
