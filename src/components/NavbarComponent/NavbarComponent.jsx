import React from 'react'
import { Checkbox, Row, Col, Rate } from 'antd';

import { WrapperLabelText,WrapperTextValue , WrapperContent,WrapperTextPrice} from './style'
import { type } from '@testing-library/user-event/dist/type'
import { ColorFactory } from 'antd/es/color-picker/color';
import { useNavigate } from 'react-router-dom';
const NavbarComponent = () => {

    const onchange = () => { }

    const navigate =useNavigate()

    const handleReload = () => {
        window.location.reload();
    }

    const handleTypeProduct=(idloairem) =>{
        navigate(`/type/${idloairem}`)
        handleReload()
    }
    
    const renderContent =(type,options) => {
        switch (type){
            case 'text':
                return options.map((option) => {
                   return <WrapperTextValue>{option}</WrapperTextValue>
                    
                })
            case 'checkbox':
                return (
                <Checkbox.Group style={{width: '100%', display:'flex', flexDirection:'column'}} onChange={onchange}>
                    {options.map((option) => {
                        return (
                            <Checkbox value={option.value }>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
            )
            case 'star':
                 
                return options.map((option) => {
                    console.log('check',option)
                    return (
                        <div style={{display:'flex'}}>
                            <Rate style={{fontSize: '12px'}} disabled defaultValue={option} />
                            <span>{`tu ${option} sao`}</span>
                        </div>
                    )
                 })
            case 'price':
                 
                return options.map((option) => {
                    
                    return (
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                 })     
            // eslint-disable-next-line no-fallthrough
            default:
                return   {}
        }
    }

    return (
    <div style={{background: '#fff'}}>
        <WrapperLabelText>Label</WrapperLabelText>
        < WrapperContent>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(1)}>
            Rèm Cửa
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(2)}>
            Rèm vải
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(3)}>
            Rèm Cuốn
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(4)}>
            Rèm Roman
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(5)}>
            Rèm văn phòng
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(6)}>
            Rèm sáo gỗ
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(7)}>
            Rèm sáo nhôm
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(8)}>
            Rèm cầu vồng
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(9)}>
            Rèm sợi chỉ
            </span>
            <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px'}} onClick={() => handleTypeProduct(10)}>
            Rèm phòng tắm
            </span>
        </WrapperContent>  
    </div>
  )
}

export default NavbarComponent
