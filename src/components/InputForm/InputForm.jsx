import React, { useState } from 'react'
import {Input} from 'antd'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const {placeholder ='Nhap text', ...rests} =props
    const handleOnchangeInput =(e) =>{
      props.onChange(e.target.value)
    }
  return (
        <WrapperInputStyle placeholder= {placeholder} value = {props.value} {...rests} onChange={handleOnchangeInput}/>
  )
}

export default InputForm