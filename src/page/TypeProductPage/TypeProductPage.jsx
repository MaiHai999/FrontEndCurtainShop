import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Row, Col } from 'antd'
import * as ProductService from  '../../services/ProductService.js'
import { WrapperProducts, WrapperNavbar } from './style'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'


const TypeProductPage = () => {
  const {id} =useParams()
  const onChange = () => { }
  const dataType = {
    id: id
  }
  const getTypeProduct = async() => {
    const res = ProductService.getType(dataType)
    return res
  }
   const { data : products} = useQuery({queryKey: ['products'], queryFn: getTypeProduct})
   console.log(products)
  return (
    <div style={{height: '1000px'}}>
    <div style={{height: '100%',width: '100%', background: '#efefef'}}>
      <div style={{width: '1270', margin: '0 auto'}}>
        <Row style={{flexWrap: 'nowrap', paddingTop: '10px' }}>
          <WrapperNavbar spam = {4}>
              <NavbarComponent/>
          </WrapperNavbar>  
          <Col span = {20} style={{marginLeft:'30px'}}>
            <WrapperProducts>
              {products?.map((product) => {
                return (
                  <CardComponent
                    ten_rem={product.ten_rem}
                    hinh_anh={product.hinh_anh}
                    so_luong={product.so_luong}
                    gia_goc={product.gia_goc}
                    xuat_xu={product.xuat_xu}
                    bao_hanh={product.bao_hanh}
                    chat_lieu={product.chat_lieu}
                    don_vi={product.don_vi}
                    kich_thuoc={product.kich_thuoc}
                    id={product.id}
                  />
                )
              })}
            </WrapperProducts>
          </Col>
        </Row>
      </div>
      <div style={{height:'50px'}}></div>
    </div>
    </div>
  )
}

export default TypeProductPage