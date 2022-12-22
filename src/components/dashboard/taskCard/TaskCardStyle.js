import styled from "styled-components";

export const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
   background: ${({ isDragging }) =>
    isDragging ? "rgba(255, 59, 59, 0.15)" : "white"}; 
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
`;
export const IconContainer = styled.div`
  //  display: flex;
  .delete {
    color: red;
  }
  .edit {
    color: #4096ff;
  }
`;
export const LabelIcon = styled.i`
  font-size: 1.5em;
  margin-left: 10px;

`;
