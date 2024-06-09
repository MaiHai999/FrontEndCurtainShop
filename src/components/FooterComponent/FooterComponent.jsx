import React from 'react'
import { Badge, Col, Layout, Row} from 'antd';
import { WrapperFooter, WrapperTextFooter, WrapperText, WrapperText2, WrapperText3, WrapperText4, WrapperText5 } from './style';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import iconmomo from '../../assets/images/iconmomo.png'
import {PhoneOutlined,HomeOutlined,InstagramFilled, MailOutlined, FacebookFilled, ContactsOutlined, createFromIconfontCN} from '@ant-design/icons'
import { Space } from 'antd';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

const FooterComponent = () => {
    const navigate = useNavigate()
    const handleNavigateMain = () => {
    navigate('/')
}
    const handleNavigateMomo = () => {
        navigate('/momo')
    }
  return (
    <div style={{width: '100%', background:'rgb(153, 51,, 255)', display:'flex', justifyContent:'center' ,left:'0px', bottom: '0px'}}>
        <WrapperFooter>
            
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '120px', padding:'-60px' , marginBottom: '45px'}}>
                <div>
                <   Row>
                        <WrapperTextFooter onClick={handleNavigateMain} style={{cursor: 'pointer'}} >Rèm Cửa Đại Việt</WrapperTextFooter>
                    </Row>
                    <Row>
                        <WrapperText2 style={{marginBottom: '-10px'}}>Rèm cửa Đại Việt là một dự án được thiết kế cho môn thương mại điện tử nhầm mục đích hiểu rõ cách thiết kế và hoạt động của một trang web thương mại điện tử.</WrapperText2>
                    </Row>
                    
                
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'10px', alignItems:'center', marginLeft: '60px', padding:'10px', marginBottom: '0px'}}>
                <div>
                    <Row>
                        <WrapperTextFooter>Thông tin liên hệ</WrapperTextFooter>
                    </Row>
                    <Row>
                        <PhoneOutlined style={{fontSize: '20px', color:'rgb(251, 233, 208)' , marginRight: '8px'}} />
                        <WrapperText4>1900 2535 - 1900 1607</WrapperText4>
                    </Row>

                    <Row>
                        <Col>
                            <HomeOutlined style={{fontSize: '20px', color:'rgb(251, 233, 208)', marginRight: '10px' }} />
                            <WrapperText4>907b Lữ Gia, phường 14 ,Quận 11, Thành phố Hồ Chí Minh</WrapperText4>
                        </Col>
                        
                        
                    </Row>
                    
                    <Row>
                    
                        <MailOutlined style={{fontSize: '20px', color:'rgb(251, 233, 208)', marginRight: '10px'}} />
                        
                        <WrapperText4> remcuaDaiViet@gmail.com</WrapperText4>
                    </Row>
                    
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '50px', padding:'-5px', marginBottom:'-10px'}}>
                <div>
                <Row>
                    
                    <WrapperTextFooter>Bản quyền thuộc về</WrapperTextFooter>
                </Row>
                <Row>
                    <ContactsOutlined style={{fontSize: '20px', color:'rgb(251, 233, 208)' , marginRight: '8px'}} />
                    <a href='https://www.facebook.com/profile.php?id=100011700110200'>
                        <WrapperText5 property='Facebook'>Mai Thanh Hải - 0987654321</WrapperText5>
                    </a>
                    
                </Row>
                <Row>
                    <ContactsOutlined style={{fontSize: '20px', color:'rgb(251, 233, 208)' , marginRight: '8px'}} />
                    <a href='https://www.facebook.com/khanhdanbee'>
                        <WrapperText5 property='Facebook'>Nguyễn Trần Khánh Văn - 0123459876</WrapperText5>
                    </a>
                    
                </Row>
                <Row>
                    <ContactsOutlined style={{fontSize: '20px', color:'rgb(251, 233, 208)' , marginRight: '8px'}} />
                    <a href='https://www.facebook.com/profile.php?id=100014188711112'>
                        <WrapperText5 property='Facebook' >Trang Tuấn Minh - 012345678</WrapperText5>
                    </a>
                    
                </Row>
                <Row>
                    <Space style={{marginLeft: '200px', marginTop: '20px' }}>
                        <span onClick={handleNavigateMomo}  style={{cursor: 'pointer'}}>
                        <img src={iconmomo} style={{ marginRight: '5px', height: '35px' }} />
                        </span>
                        <a href='https://www.facebook.com/profile.php?id=61559295657021'>
                            <FacebookFilled property='Facebook' style={{fontSize: '35px',   }} />
                            
                        </a>
                        <a href='https://www.instagram.com/khanhdanbee/'>
                            <InstagramFilled property='Instagram' style={{fontSize: '37px', marginLeft: '5px', color: '#E1306C' }} />
                        </a>   
                    </Space>
                    </Row>
                </div>
               
            </Col>

        </WrapperFooter>
    </div>
  )
}

export default FooterComponent