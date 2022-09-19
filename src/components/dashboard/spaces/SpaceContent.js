import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles, ThemeProvider } from "@mui/styles";

import { createTheme } from "@mui/system";
import AddEspace from "./AddEspace";
import SpaceToolbar from "./SpaceToolbar";
import SpaceCard from "./SpaceCard";
import LoadingAnimation from "../../LoadingAnimation";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "#0554F2",
    backgroundColor: "#F1F8FF",
  },
});

export const SpaceContent = (props) => {
  const classes = useStyles();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [spacesData, setSpacesData] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    // récuperer les datas en ajax
    // les méthodes principales en http sont : GET, POST, PATCH, PUT, DELETE, (OPTIONS) "CRUD"

    // const xhttp = new XMLHttpRequest()

    // xhttp.onreadystatechange = function () { // fction executer a chaque changemt de l'etat de notre requête
    //   // les etast st les suivants et correspondent au codes suivant:
    //   //0 : non initialisé
    //   //1 : connexion établie avc le serveur
    //   //2 : requête recu par le serveur
    //   // 3 traitemt de la req par le serveur
    //   //4 : fin de traitement de la req et reponse recu

    //   console.log("state:",this.readyState);
    //   // verif de l'etat de la req ainsi que du statut de la reponse
    //   if(this.readyState === 4 && this.status === 200){
    //     console.log(this.responseText);
    //   }
    // }

    // xhttp.open('GET','https://jsonplaceholder.typicode.com/posts')
    // xhttp.send()
    // fetch('https://jsonplaceholder.typicode.com/posts', initConfig)
    // .then((response)=>{
    //   console.log(response);
    //   if(response.ok){
    //      return response.json()
    //   }else{
    //     throw new Error() ;
    //   }

    // })
    // .then((data)=>{
    //   console.log(data);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })

    getData();
  }, [reload]);

  const getData = async () => {
    const initConfig = {
      method: "GET",
    };
    console.log(params.uid);
    try {
      let response = await fetch(
        `http://localhost:5000/spaces/${params.uid}/getAllSpaces`,
        initConfig
      );
      let data = await response.json();
      // let data = result.slice(0, 3);
      console.log(data);
      // setTimeout

      setSpacesData(data);
      setIsLoading(false);
    } catch (error) {}
  };

  const reloadSpaceContent = () => setReload(!reload);

  return (
    <div className="espace">
      <SpaceToolbar title="Vos espaces de travail" />

      <LoadingAnimation isLoading={isLoading} type="lineaire" />
      {spacesData !== null && (
        <>
          <Grid container spacing={2}>
            {spacesData.map((space) => {
              console.log(space);
              return (
                <Grid item lg={3} key={space.id}>
                  <SpaceCard
                    id={space.id}
                    imgUrl=""
                    title={space.title}
                    description={space.description}
                  />
                </Grid>
              );
            })}

            {/* affichage des datas récupérer */}
            <Grid item lg={3}>
              <AddEspace reloadSpaceContent={reloadSpaceContent} />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};
