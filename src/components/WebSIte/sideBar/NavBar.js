import Box from "@mui/material/Box";
import React from "react";
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles({
    root: {
        color: 'white',
        backgroundColor : '#056CF2'
    }
});

const height = window.innerHeight - 65;

function NavBar({ activeTab, handleChange, children }) {

    // const [activeTab, setActiveTab] = React.useState(0);

    // const handleChange = (event, id) => {
    //     setActiveTab(id);
    // };
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height :height}}
        >
            <Tabs
                className={classes.root}
                orientation="vertical"
                value={activeTab}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
                textColor="white"
            >
                {children}
            </Tabs>
        </Box>
    )
}
export default NavBar;
