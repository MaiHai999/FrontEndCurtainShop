import React, { useState } from 'react';
import { Image, Row, Col} from 'antd';
import * as ProductService from  '../../services/ProductService.js'
import {StarFilled,PlusOutlined,MinusOutlined, DownloadOutlined} from '@ant-design/icons'
import { InputNumber, Button } from 'antd';
import { MdLocationOn } from 'react-icons/md';
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct,WrapperButton, WrapperInputNumber } from './style'
import { useQuery } from '@tanstack/react-query';
import * as utills from '../../utills';
const ProductDetailComponent = (id) => {
  const [quantity, setQuantity] = useState(1)
  const [ dataGlobe, setDataGlobe] = useState({
    id: "", 
    tenremcua: "", 
    donvi: "", 
    baohanh: "", 
    xuatxu: "", 
    kichthuoc: "", 
    so_luong: "", 
    chatlieu: "", 
    idloairem: "",  
    gia_goc: "",
    gia_ap_dung:"",
    hinh_anh : "" 
  });

  const onChange = (newValue) => {
    setQuantity(newValue);
  }

  let num = parseInt(id.id);

  const data = {
    id : num
  }

  const fetchGetDetailsProduct = async() => {
    const res = await ProductService.getDetailsProduct(data)
    setDataGlobe(res); 
  }

  const {data: productDetails} = useQuery({queryKey: ['product-details'], queryFn: fetchGetDetailsProduct})
  console.log(dataGlobe)

  const handleOk = () => {
    utills.deleteCart(dataGlobe.id)
    const data = {
      id : dataGlobe.id,
      so_luong : quantity,
      con_lai: dataGlobe.so_luong,
      hinh_anh: dataGlobe.hinh_anh,
      gia:dataGlobe.gia_ap_dung,
      ten_rem: dataGlobe.ten_rem
    }
    utills.saveCart(data);
    const result = utills.getCart();
    console.log(result);
  }
  const giaOK=dataGlobe.gia_ap_dung
  
  return (
      <Row style={{padding: '16px'}}>
        <Col span={14}>
          <Image style={{width: '600px', height:'600px'}}
           src={dataGlobe.hinh_anh} alt='image product' preview={false} />
          <div>
            <Row style={{paddingTop: '10px',justifyContent: 'space-between'}}>
            </Row>
          </div>
        </Col>
        <Col style={{paddingLeft: '40px '}} span={10}>
          <WrapperStyleNameProduct>{dataGlobe.ten_rem}</WrapperStyleNameProduct>
          <div>
            <MdLocationOn size={20} color="black" />
            <span style={{fontSize:'20px'}}>Xuất xứ {dataGlobe.xuat_xu}</span>
            <WrapperStyleTextSell>   | Còn lại {dataGlobe.so_luong}</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              <span style={{marginRight: '8px'}}>{giaOK.toLocaleString()}</span>
              <span>&#8363;</span>
              </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao từ</span>
            <span className='address'>   97 Man Thiện, Phường Hiệp Phú, Thành Phố Thủ Đức   </span>
            <div style={{marginTop: '5px'}}>Cam kết bảo hành {dataGlobe.bao_hanh}</div>
          </WrapperAddressProduct>
          <div style={{margin: '10px 0 20px', borderTop:' 1px solid #e5e5e5', borderBottom: ' 1px solid #e5e5e5'}}>
            <div style={{marginBottom: '9px', marginTop:'5px'}}>Số lượng</div>
                <InputNumber min={1} max={dataGlobe.so_luong} defaultValue={1} value={quantity} onChange={onChange}/>
          </div>
          <div style={{paddingTop: '20px', display: 'flex', alignItems:'center', gap: '12px'}}>
            <Button style={{ width: '220px', height: '50px', background: 'rgb(255,57,69)'}} type="primary" onClick={handleOk} >
              Chọn mua
            </Button>
          </div>
        </Col>
      </Row>
    
  )
}

export default ProductDetailComponent