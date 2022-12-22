import React from 'react';
import {TaskInformation, IconContainer, LabelIcon} from './TaskCardStyle.js'
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ item, index }) => {

  const handelDelete = () => {
    console.log('da xoa');
  }
  const handelEdit = () => {
    console.log('da sua');
  }

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <TaskInformation>
          <p>{item.Task}</p>
          <div className="secondary-details">
            <p>
              <span>
                {new Date(item.Due_Date).toLocaleDateString('en-us', {
                  month: 'short',
                  day: '2-digit',
                })}
              </span>
            </p>
            <IconContainer>
              <LabelIcon onClick={handelDelete} className="delete fa-solid fa-trash" />
              <LabelIcon onClick={handelEdit}  className="edit fa-solid fa-pen-to-square" />
            </IconContainer>
          </div>
        </TaskInformation>
      </div>
    )}
  </Draggable>
  )
}

export default TaskCard