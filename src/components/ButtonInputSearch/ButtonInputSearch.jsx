import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'



const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton, bordered, 
        backgroudColorInput='#fff', 
        backgroudColorButton= 'rgb(13 ,92, 182)',
        colorButton ='#fff'
    } = props
  return (
    <div style={{display: 'flex', background: '#fff'}}>
        <InputComponent
            size={size} 
            placeholder={placeholder} 
            bordered={bordered} 
            style={{backgroudColor: backgroudColorInput, borderRadius: '4px 0 0 4px'}}
            {...props}
        />
        <ButtonComponent
            size={size} 
            style={{background: backgroudColorButton, border: !bordered && 'none',borderRadius: '4px 0 0 4px'}}
            icon={<SearchOutlined color={ colorButton} style={{color: '#fff'}} />}
            textButton={textButton}
            styleTextButton={{color: 'colorButton'}}
        />
    </div>
  )
}

export default ButtonInputSearch