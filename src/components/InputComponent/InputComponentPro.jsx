import React, { useState } from 'react';
import {Input} from 'antd';

const InputComponentPro = ({style, placeholder, bordered, size, values, handleInputChange, ...rests}) => {
    return (
   <Input
        size={size} 
        placeholder={placeholder} 
        bordered={bordered} 
        style={style}
        value={values}
        onChange={handleInputChange}
        {...rests}
    /> 
  )
}

export default InputComponentPro