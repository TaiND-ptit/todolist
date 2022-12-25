import React, { useEffect, useState } from 'react'
import {DateContainer} from './DateStyle'
import { DatePicker } from 'antd'
const Date = ({enterDate}) => {
  const [enteredDate, setEnteredDate] = useState("");
  const onChange = (date,dateString) => {
    // console.log(dateString)
    setEnteredDate(dateString)
  };

  useEffect(()=>{
    enterDate(enteredDate);
  },[enterDate, enteredDate])

  return (
    <DateContainer>
      <DatePicker 
        onChange={onChange} 
        size='large'
        />
    </DateContainer>
  )
}

export default Date