import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import "../../css/style-dashboard.css"
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
const AddEspace = () => {
  return (
    <Card sx={{ maxWidth: 345 , marginTop: 2}}>
      <Link to='/creation'>
      <CardActionArea className="card-action-add-espace">
        

        <CardMedia className="card-media-add-espace" sx={{height : 140}}>
           <Typography className="add-espace">
                <AddIcon fontSize="large" />
                Ajouter un espace
            </Typography>
            
            
        </CardMedia>
        
      </CardActionArea>
      </Link>
    </Card>
  );
};

export default AddEspace;
