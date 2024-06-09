import React, { useState , useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputComponent from '../InputComponent/InputComponent';

function InputDateTimeComponent({placeholder,value,setValue}) {

  return (
    <div>
      <DatePicker
        selected={value}
        onChange={date => setValue(date)}
        dateFormat="yyyy-MM-dd" 
        showYearDropdown 
        scrollableMonthYearDropdown 
        placeholderText={placeholder}
        customInput={<InputComponent/>}
      />
    </div>
  );
}

export default InputDateTimeComponent;
