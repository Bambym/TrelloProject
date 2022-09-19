import React, { useEffect, useState } from "react";
import SpaceToolbar from "../spaces/SpaceToolbar";
import ColumnCard from "./ColumnCard";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import AddColumn from "./AddColumn";
import { DragDropContext } from "react-beautiful-dnd";

const ColumnContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const [tableData, setTableData] = useState(null);
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
        `http://localhost:5000/columns/${params.uid}/${params.spaceId}/${params.tableId}/getAllColumns`,
        initConfig
      );
      let data = await response.json();
      console.log(data);
      // setTimeout
      setTableData(data);
      setIsLoading(false);
    } catch (error) {}
  };

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = tableData.columns[source.droppableId];
    console.log(column);
    const newTodosIds = Array.from[column.todosIds];

    newTodosIds.splice(source.index, 1);
    newTodosIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      todosIds: newTodosIds,
    };

    const newState = {
      ...tableData,
      columns: {
        ...tableData.columns,
        [newColumn.id]: newColumn,
      },
    };
    setTableData(newState);
    return;
  };
  const reloadSpaceContent = () => setReload(!reload);

  return (
    <div className="table">
      {tableData !== null && (
        <>
          <SpaceToolbar title={tableData.title} />
          <Grid height="100vh" sx={{ marginRight: 1 }} container spacing={2}>
            <DragDropContext onDragEnd={onDragEnd}>
              {tableData.columns.length !== 0 &&
                tableData.columns.map((col) => (
                  <Grid item lg={3} key={col.id}>
                    <ColumnCard
                      columnData={col}
                      reloadSpaceContent={reloadSpaceContent}
                    />
                  </Grid>
                ))}
            </DragDropContext>

            <Grid item lg={3}>
              <AddColumn reloadSpaceContent={reloadSpaceContent} />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};
export default ColumnContent;
