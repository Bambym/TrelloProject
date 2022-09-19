import React, { useState } from "react";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardMedia , CardContent ,Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";

const SpaceCard = (props) => {
  
  let navigate = useNavigate()
  const {id} = props
  
  const handleClick=()=>{
    navigate(`espace/${id}`);
  }
  
  
  
  return (
    <Card key={props.id} sx={{ maxWidth: 345, marginTop: 2 }}>
      <CardActionArea onClick={handleClick}>
           
        <CardMedia
          component="img"
          height="140"
          image={props.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SpaceCard;
