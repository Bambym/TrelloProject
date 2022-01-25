import { CardMedia, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import apercu from "../../images/apercu.png";
import { Typography } from "@mui/material";

export const SpaceCreation = () => {
//   const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const data = e.target ;
    console.log(data);
   
  };
  return (
    <Box
      className="spaceCreation"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 345,

        paddingLeft: 5,
        paddingRight: 5,

        paddingBottom: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        borderRadius: "7%",

        backgroundColor: "#fff",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={apercu}
        alt="apercu trello"
        sx={{ marginTop: 10 }}
      />

      <Typography component="h1" variant="h5" sx={{ marginTop: 10 }}>
        Crée ton Espace
      </Typography>
      <TextField
        id="title"
        label="Entre un Titre"
        name="title"
        type="text"
        
        sx={{ marginTop: 10 }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
        // disable={isLoading}
        onSubmit={handleSubmit}
      >
        Valider
      </Button>
    </Box>
  );
};
