import React from "react";
import { Card, Box } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardContent, Typography } from "@mui/material";
import AddTodos from "../Todos/AddTodos";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import DeleteTodo from "../Todos/DeleteTodo";
import DeleteColumn from "./DeleteColumn";
const ColumnCard = ({ columnData, reloadSpaceContent }) => {
 
  return (
    <Card
      key={columnData.id}
      sx={{
        color: "#0554F2",
        // maxWidth: 345,
        margin: 1,
        padding: 1,
        backgroundColor: columnData.bgColor,
        border: "2px solid light-grey",
        boxShadow: "0 4px 6px rgba(0,0,0,0.08), 0 4px 3px rgba(0,0,0,0.08)",
      }}
    >
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {columnData.title}<DeleteColumn columnId={columnData.id} reloadSpaceContent={reloadSpaceContent}/>
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {columnData.description}
          </Typography>
          <div>
            <Droppable droppableId={columnData.id}>
              {provider => (
                <div {...provider.droppableProps} ref={provider.innerRef}>
                  {columnData.todos.map((td, index) => (
                    <Draggable draggableId={td.id} index={index}>
                      { provider => (
                        <div
                          {...provider.draggableProps}
                          {...provider.dragHandleProps}
                          ref={provider.innerRef}
                        >
                          <Box
                            sx={{
                              marginTop: 3,
                              padding: 1,
                              borderRadius: "5px",
                              backgroundColor: "white",
                              borderBottom: "0.8px solid #999",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>{td.title} </div>
                            
                            <DeleteTodo
                              columnId={columnData.id}
                              todoId={td.id}
                              reloadSpaceContent={reloadSpaceContent}
                            />
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        </CardContent>
      
      <AddTodos
        columnId={columnData.id}
        reloadSpaceContent={reloadSpaceContent}
      />
    </Card>
  );
};

export default ColumnCard;
