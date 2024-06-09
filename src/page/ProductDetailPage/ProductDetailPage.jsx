import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const {id} =useParams()
  const navigate = useNavigate()  
  return (
    <div style={{padding: '10px 120px', background: '#efefef'}}>
      <h5 style={{fontSize: '15px', fontWeight: 'bold'}}>Trang chủ - Chi tiết sản phẩm</h5>
      <div style={{display:'flex', background:'#fff'}}>
        <ProductDetailComponent id={id}/>
      </div>
      <div style={{height:'100px'}}></div>   
    </div>
  )
}
export default ProductDetailPage
