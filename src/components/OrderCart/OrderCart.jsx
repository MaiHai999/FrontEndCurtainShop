import {Card} from 'antd'
import {Flex,Tag} from 'antd'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {StarFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import remcua1 from '../../assets/images/remcua1.jpg'
const CardComponent = () => {
  //const {ten_rem, hinh_anh, gia_ap_dung, chat_lieu, so_luong, id} =props
  
  const navigate =useNavigate()
  const handleDetailsProduct=(id) =>{
    navigate(`/product-details/${id}`)
  }
  return (
    <div></div>
  )
}

export default CardComponent
