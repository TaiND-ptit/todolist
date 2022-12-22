import React, { useState } from 'react'
import { columnsFromBackend } from '../../../config/data/Task';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  ListTaskContainer, 
  Todo, 
  FilterContainer, 
  Container,
  TaskList,
  TaskColumnStyles,
  Title, 
  SortContainer
} from './listTaskStyle'
import { TaskTitle } from '../addTask/AddTaskStyle'
import TaskCard from '../taskCard/TaskCard';
import { Input } from 'antd';
const { Search } = Input;

const ListTask = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onSearch = (value) => console.log(value);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <ListTaskContainer>
        <TaskTitle><Todo>Todo </Todo> List </TaskTitle>
    <FilterContainer>
    <Search
      placeholder="input search text"
      style={{marginLeft: '10px', width: '50%' }}
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
     <SortContainer>
        <p>Sort by:</p>
        <button>
          Date <i className="fa-solid fa-arrow-up"></i> 
          {/* Date{!isSortingUp ? : ""} */}
          {/* {isSortingUp ? <i className="fa-solid fa-arrow-down"></i> : ""} */}
        </button>
      </SortContainer>
    </FilterContainer>    
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Title>{column.title}</Title>
                    {column.items.map((item, index) => (
                      <TaskCard key={item} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
             
        
    </ListTaskContainer>
  )
}

export default ListTask