import React, { useEffect, useState } from "react";
import SpaceToolbar from "../spaces/SpaceToolbar";
import TableCard from "./TableCard";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import AddTable from "./AddTable";


const TableContent = () => {
  
  const[isLoading, setIsLoading] = useState(true);
  const params = useParams()
  const [tableData, setTableData] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    getData();
  }, [reload]);

  const getData = async () => {
    const initConfig = {
      method: "GET",
    };
    try {
      let response = await fetch(
        `http://localhost:5000/tables/${params.uid}/${params.spaceId}/GetAllTables`,
        initConfig
      );
      let result = await response.json();
      let data = result;
      console.log(data);
      // setTimeout
      setTableData(data);
      setIsLoading(false);
    } catch (error) {}
  };
  
  const reloadSpaceContent = () => setReload(!reload)

  return (
    <div className="table">
      <SpaceToolbar title ="Vos Tableaux"/>
      <Grid container spacing={2}>
      {tableData.map((table)=>(
          <Grid item lg={3} key={table.id}>
            <TableCard id={table.id}  title={table.title} description={table.description}  />
          </Grid>
          
      ) )}
      <Grid item lg={3}><AddTable reloadSpaceContent={reloadSpaceContent}/></Grid>
      
      </Grid>
    </div>
  );
};
export default TableContent;
