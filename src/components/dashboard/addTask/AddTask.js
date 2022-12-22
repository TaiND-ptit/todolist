import React from 'react';
import { Button, Form, Input } from "antd";
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
const { TextArea } = Input;
const AddTask = () => {
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
            // onFinish={onFinish}
          >
              <InputAnt
                placeholder="Title"
                size="large"
              />
              <TextArea
              rows={4}
              placeholder="Description" />
            <DateContainer>
                <Date/>
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