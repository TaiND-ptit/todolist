import React, { useState } from 'react';
import { Form, Input } from "antd";
import {
  TaskContainer,
  TaskTitle,
  Todo,
  AddTaskContainer,
  InputAnt,
  DateContainer,
  ButtonAnt
} from "./AddTaskStyle";
import Date from '../../common/date/Date';
import API from '../../../config/api/api';
const { TextArea } = Input;
const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createDate, setCreateDate] = useState('');
 
  const handleDate = (enteredDate) => {
    setCreateDate(enteredDate);
  }

  const onFinish = () => {
    console.log(title, description, createDate)
    const task = {
      title,
      description,
      createDate
    }
    
    // Post du lieu len API
    API.post(`tasks`,task)
    .then(res => {
      const p = res.data;
    })

    setTitle('');
    setDescription('');
    setCreateDate(null)
  }


  return (
    <>   
    <TaskContainer>
        <TaskTitle>
           What do You Have
           <Todo>
                ToDo?
           </Todo>
        </TaskTitle>
        <AddTaskContainer>
        <Form
            name="login-form"
            className="login-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
          >

              <InputAnt
                placeholder="Title"
                size="large"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
           
       
              <TextArea
              rows={4}
              placeholder="Description" 
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              />
            
            <DateContainer>
                <Date enterDate={handleDate}/>
            </DateContainer>
            
              <ButtonAnt
                type="primary"
                block
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                Add
              </ButtonAnt>
        
          </Form>
        </AddTaskContainer>
    </TaskContainer>
    </>
 
  )
}

export default AddTask