import { Button, Input } from 'antd';
import styled from 'styled-components';

export const TaskContainer = styled.div`
    width: 30%;
    height: 55%;
    background-color: #ffffff;
    border-radius: 40px;
    margin-left: 5%;
    text-align: center;
    padding: 10px;
    margin-top: 2vh;
    position: fixed;
`;

export const TaskTitle = styled.h2`
  
`;
export const Todo = styled.p`
    display: inline;
    background: linear-gradient(180deg, #7c4eff 0%, #6db0ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;
export const AddTaskContainer = styled.div`
    width: 80%;
    margin-left: 10%;
`;
export const InputAnt = styled(Input)`
    background-color: #eeeeee;
    border-radius: 10px;
    border: none;
    width: 100%;
    min-height: 40px;
    margin-bottom: 15px;
    padding-left: 3%;
    caret-color: black;
  
 `;

export const DateContainer = styled.div`
    border-radius: 10px;
    width: 100%;
    border: none;
    min-height: 50px;
    margin-bottom: 15px;
    `;
export const ButtonAnt = styled(Button)`
    width: 125px;
    height: 40px;
    background: linear-gradient(90deg, #7c4eff 0%, #6db0ff 100%);
    border-radius: 10px;
    border: none;
    color: #ffffff;
    float: right;
    margin-top: 5%;
    transition: 0.3s;
        &:hover {
            background: linear-gradient(90deg, #5e3ac5 0%, #3577c6 100%);
            cursor: pointer;
        }
    }
`;
// export const Waraper = styled.div`
  
// `;