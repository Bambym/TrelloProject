import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';


const DeleteTodo = ({reloadSpaceContent,columnId,todoId}) => {
    const params = useParams()
    const handleClick = async () => {
    
    console.log(columnId)
    console.log(todoId)
     
     
        try {
          const initConfig = {
            method:"DELETE",  
          }
          const response = await fetch( 
            `http://localhost:5000/todos/${params.uid}/${params.spaceId}/${params.tableId}/${columnId}/${todoId}/deleteTodo`,
            initConfig
        )
          const data = await response.json()
          reloadSpaceContent()
          
        } catch (error) {
          const code = error.message;
                    console.log(code)
                   
        }
        } 
    return (
    <Button onClick={handleClick}><DeleteForeverIcon/></Button>
  )
}

export default DeleteTodo