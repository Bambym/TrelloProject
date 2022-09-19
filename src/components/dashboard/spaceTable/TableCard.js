import React from "react";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import {  CardContent ,Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";


const TableCard = (props) => {
    
    let navigate = useNavigate()
    const {id} = props
    
    const handleClick=()=>{
      navigate(`table/${id}`);
    }
    
  
    return (
    <Card key={props.id} sx={{ maxWidth: 345, marginTop: 2 }}>
      <CardActionArea onClick={handleClick}>
           
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          {/* <div>
            {props.todos.map((todo)=>(
              <Todo title={todo.title} />
            ))}
          </div> */}
        </CardContent>
      </CardActionArea>
    </Card>
    )
};

export default TableCard;
