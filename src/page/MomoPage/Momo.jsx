import React from 'react';
import momo from '../../assets/images/momo.jpg';

const Momo = () => {
  return (
    <div style={{ height: '700px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '30px'
      }}>
        <img src={momo} alt="Momo" style={{ maxWidth: '500px', maxHeight: '500px' }} />
        <div style={{ marginLeft: '30px' }}>
          <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Thông tin chuyển khoản</span>
          <div style={{ marginTop: '20px',  fontSize: '20px'  }}>
            <div style={{marginTop:'20px'}}>Ví điện tử: MOMO</div>
            <div style={{marginTop:'20px'}}>Tên người nhận: TRAN NGOC KHANH VAN</div>
            <div style={{marginTop:'20px'}}>Nội dung: Số điện thoại đặt đơn hàng</div>
            <div style={{ marginTop: '20px', color: '#FF0000' }}>
            Lưu ý: Khách hàng nên lưu lại mã giao dịch của momo để bộ phận
            </div>
            <div style={{ color: '#FF0000' }}>
            xác nhận đơn có thể hoàn thành xác nhận đơn nhanh chóng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Momo;