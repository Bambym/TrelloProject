import  React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ClassNames } from '@emotion/react';

export default function TabPanel(props) {
  const { children, activeTab, index, ...other } = props;
  
  return (
    <div
      
      role="tabpanel"
      hidden={activeTab !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {activeTab === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}




