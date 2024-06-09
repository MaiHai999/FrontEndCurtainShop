import {Card} from 'antd'
import {Flex,Tag} from 'antd'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {StarFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const CardComponent = (props) => {
  const {ten_rem, hinh_anh, xuat_xu, bao_hanh, gia_goc, chat_lieu, don_vi, so_luong, kich_thuoc, id} =props
  
  const navigate =useNavigate()
  const handleDetailsProduct=(id) =>{
    navigate(`/product-details/${id}`)
  }
  return (
    <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '8px' }}
            cover={<img alt="example" src={hinh_anh} />}
            onClick={() => handleDetailsProduct(id)}
        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}
            />
      <Flex gap="4px 0" wrap="wrap">
      </Flex>
    <StyleNameProduct>{ten_rem}</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: '4px'}}>
          <span>{chat_lieu}</span>
        </span>
        <span>| Còn lại {so_luong}</span> 
      </WrapperReportText>
       <WrapperPriceText>
        <span style={{marginRight: '8px'}}>{gia_goc.toLocaleString()}</span>
        <span>&#8363;</span>
        
      </WrapperPriceText> 
      <span style={{fontSize:'11px'}}>  Made in {xuat_xu}</span>
    </WrapperCardStyle>
  )
}

export default CardComponent
