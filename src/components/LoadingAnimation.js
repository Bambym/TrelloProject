import { CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

const LoadingAnimation = ({isLoading,color = 'primary',type = 'circle'}) => {
    
    if(isLoading){
        
        return (
        
            type === "circle" ? <CircularProgress color = {color} />: 
            type === "linear" ? <LinearProgress color = {color}/> : "Chargement ..."
        )
    }else return null
            
     
    

}
export default LoadingAnimation