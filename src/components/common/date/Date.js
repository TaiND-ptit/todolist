import React from 'react'
import {DateContainer} from './DateStyle'
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd'
const Date = () => {

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <DateContainer>
      <DatePicker 
      onChange={onChange} 
      size='large'/>
    </DateContainer>
  )
}

export default Date