import { Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
const DeleteColumn = ({columnId, reloadSpaceContent}) => {
    const params = useParams()
    const handleClick = async () => {

        try {
          const initConfig = {
            method:"DELETE",  
          }
          const response = await fetch( 
            `http://localhost:5000/columns/${params.uid}/${params.spaceId}/${params.tableId}/${columnId}/deleteColumns`,
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
    <Button onClick={handleClick}><CancelPresentationIcon/></Button>
  )
}

export default DeleteColumn