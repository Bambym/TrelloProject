import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import "../../../css/style-dashboard.css";
import Typography from "@mui/material/Typography";
import {  useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import {v4 as uuid} from 'uuid'
import { useFormik } from 'formik';
import * as yup from 'yup';
import LoadingAnimation from "../../LoadingAnimation";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:"30px",
    boxShadow: 24,
    p: 4,
  };

const validationSchema = yup.object({
    title: yup
      .string('Entrer un titre')
    
      .required('Un Titre est requis'),
    
  })
const AddTodos = ({reloadSpaceContent,columnId}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams()

    const handleSubmit = async () => {
        
        try {
          setIsLoading(true)
          
    

            let todos={
                id:uuid(),
                title: formik.values.title,
                todoContent:[]

            }
          
          let myHeaders= new Headers({"Content-Type":"application/json"})
          const initConfig = {
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(todos)
          }
          const response = await fetch( 
            `http://localhost:5000/todos/${params.uid}/${params.spaceId}/${params.tableId}/${columnId}/newTodos`,
            initConfig
        )
          const data = await response.json()
    
          reloadSpaceContent()
          setIsLoading(false)
          handleClose() 
        } catch (error) {
          const code = error.message;
                    console.log(error)
                    setIsLoading(false)
                   
        }
        } 

    const formik = useFormik({
        initialValues: {
          
          title: '',
         
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
      });
  
    return (
    <Box sx={{marginTop:2,textAlign:"center"}}
    
    >
        <Button onClick={handleOpen}>Ajouter une Tâche</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box 
         component="form" 
         sx={style}
         onSubmit={formik.handleSubmit} 
         >
         <TextField
          required
          id="title"
          label="title"
          name="title"
          variant="filled"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
         
         
         
        <Button  
        type="submit"    
        variant="contained"
        disable={isLoading}
        >Envoyer</Button>
        <LoadingAnimation isLoading={isLoading} color = 'success' type = 'linear' />
        </Box>
      </Modal>

    </Box>
  )
  
};

export default AddTodos;
