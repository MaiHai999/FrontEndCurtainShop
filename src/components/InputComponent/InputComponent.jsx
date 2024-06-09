import React from 'react'
import {Input} from 'antd'

const InputComponent = ({style, placeholder, bordered, content ,size, ...rests}) => {
  return (
   <Input
        size={size} 
        placeholder={placeholder} 
        bordered={bordered} 
        style={style}
        defaultValue={content} 
        {...rests}
    /> 
  )
}

export default InputComponent