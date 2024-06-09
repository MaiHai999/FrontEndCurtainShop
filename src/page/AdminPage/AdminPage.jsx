import { Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../utills'
import {
  AccountBookOutlined, 
  AppstoreOutlined, 
  ApartmentOutlined,
  LineChartOutlined,
  DatabaseOutlined
}from '@ant-design/icons'
import Product from '../../components/Product/Product'
import Statistic from '../../components/Statistic/Statistic'
import PromotionPage from '../PromotionPage/Promotion'
import OrderPage from '../OrderPage/OrderPage'
const AdminPage = () => {
  const items = [
    getItem('Sản Phẩm', 'product', <AppstoreOutlined />),
    getItem('Khuyến mãi', 'discount', <AccountBookOutlined />),
    getItem('Đơn hàng', 'order', <DatabaseOutlined />),
    getItem('Thống Kê', 'statistic', <LineChartOutlined />)
  ]

  const renderPage = (key) => {
    switch(key) {
      case 'discount':
        return (
          <PromotionPage/>
        )
      case 'product':
        return (
          <Product/>
        )
      case 'order':
        return (
          <OrderPage/>
        )
        case 'statistic':
          return (
            <Statistic/>
          )
        default:
          return <></>
    }
  }

  const [keySelected ,setKeySelected] = useState('')
  console.log('keySelected', keySelected)

  const handleOnClick = ({key}) =>{
    setKeySelected(key)
  }

  return (
    <div style={{display: 'flex', height:'1000px'}}>
      <Menu
        mode='inline'
        style={{
          width: 256,
          boxShadow: '1px 1px 2px #ccc',
          height: '100vh'
        }}
        items={items}
        onClick={handleOnClick}
      />
      <div style={{ flex : 1, padding: '15px' }}>    
        {renderPage(keySelected)}
      </div>
    </div>
  )
}

export default AdminPage