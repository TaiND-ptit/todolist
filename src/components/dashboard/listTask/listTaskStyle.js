import { Input } from "antd";
import styled from "styled-components";

export const ListTaskContainer = styled.div`
  width: 55%;
  float: right;
  height: 90%;
  background-color: white;
  border-radius: 40px;
  margin-right: 5%;
  margin-top: 2vh;
  text-align: center;
`;

export const Todo = styled.p`
  font-size: 40px;
  font-weight: 700;
  display: inline;
  background: linear-gradient(180deg, #7c4eff 0%, #6db0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FilterContainer = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SortContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;

    p {
      color: rgba(52, 52, 52, 1);
      display: inline;
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 20px;
      width: 100px;
      cursor: pointer;

      &: hover{
        text-decoration: underline;
      }
    }

    button i {
      color: black;
      font-size: 15px;
    }
`;


export const Container = styled.div`
  width: 90%;
  display: flex;
  
//   @media screen (max-width: 768px){
//     flex-direction: row;
//   }
`;

export const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 27%;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
`;

export const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

export const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;
