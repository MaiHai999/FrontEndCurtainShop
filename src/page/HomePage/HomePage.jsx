import React from 'react'
import { TypeProduct } from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import s1 from '../../assets/images/s1.png'
import s2 from '../../assets/images/s2.png'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.png'
import s5 from '../../assets/images/s5.png'

import SliderComponent from '../../components/SliderComponent/SliderComponet'
import CardComponent from '../../components/CardComponent/CardComponent.jsx'
import * as ProductService from  '../../services/ProductService.js'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const HomePage = () => {

  const navigate =useNavigate()

  const handleTypeProduct=(idloairem) =>{
    navigate(`/type/${idloairem}`)
  }
  const getAllProducts = async() => {
    const res = await ProductService.getAllProduct()
    return res
  }
  const { data : products} = useQuery({queryKey: ['products'], queryFn: getAllProducts})

  return (
    <>
      <div style={{textAlign: 'center', width: '1900px', marginTop: '12px', height: '40px'}}>
        <span style={{marginLeft : '60px',cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(1)}>
          Rèm Cửa
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(2)}>
          Rèm vải
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(3)}>
          Rèm Cuốn
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(4)}>
          Rèm Roman
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(5)}>
          Rèm văn phòng
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(6)}>
          Rèm sáo gỗ
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(7)}>
          Rèm sáo nhôm
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(8)}>
          Rèm cầu vồng
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(9)}>
          Rèm sợi chỉ
        </span>
        <span style={{cursor: 'pointer', fontSize:'20px', marginRight:'60px'}} onClick={() => handleTypeProduct(10)}>
          Rèm phòng tắm
        </span>
        </div>
        <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ height: '100%', width: '1660px', margin: '0 auto' }}>
          <SliderComponent arrImages={[s1, s2, s3, s4, s5]} />
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
            <div style={{width: '100%', display: 'flex', justifyContent:'left', marginTop: '10px'}}>
              <div style={{height:'50px'}}></div>
            </div>
          </div>
          </div>
    </>
  )
}

export default HomePage