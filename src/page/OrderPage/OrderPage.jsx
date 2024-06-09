import React, { useEffect, useState } from 'react'
import {Table, Select } from 'antd';
import './style.css';
import * as service from '../../services/OrderService';
import InputComponentPro from '../../components/InputComponent/InputComponentPro';
import ButtonClickComponent from '../../components/ButtonComponent/ButtonClickComponent';

const OrderPage = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState(null);
  const [dataRem, setDataRem] = useState([]);
  const [options, setOptions] = useState([]); 
  const [selectedKey, setSelectedKey] = useState();
  const { Option } = Select
  const [dataCT, setDataCT] = useState([]);
  

  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  function formatTrangThai(index){
    switch(index) {
      case 0:
        return "Đang vận chuyển";
      case 1:
        return "Đã nhận hàng";
      case 2:
        return "Đã xoá";
      case 3:
        return "Đang đặt hàng";
    }
  }

  function formatHinhThuc(index){
    switch(index) {
      case 1:
        return "Chuyển ngân hàng";
      case 2:
        return "Ví mono";
      case 3:
        return "Tiền mặt";
      case 4:
        return "VNpay";
      case 5:
        return "Zalopay";
    }
  }

  const columnsRem = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Giá Áp Dụng",
      dataIndex: "appliedPrice",
      key: "appliedPrice"
    },
    {
      title: "Số lượng",
      dataIndex: "soluong",
      key: "soluong"
    }
  ];

  const columnsOrder = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Địa chỉ",
      dataIndex: "diachi",
      key: "diachi"
    },
    {
      title: "SDT",
      dataIndex: "sdt",
      key: "sdt"
    },
    {
      title: "Thành tiền",
      dataIndex: "thanhtien",
      key: "thanhtien"
    },
    {
      title: "Hình thức",
      dataIndex: "hinh_thuc",
      key: "hinh_thuc"
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      key: "trangthai"
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
      key: "ngay_tao"
    },
  ];

  const callAPIinit = () => {
    service.GetAllOrder().then(data => {
      const newData = []
      const newDataCT = []
      
      for(const order of data.data){
        const dataTable = {
          id : order.id,
          email : order.email,
          diachi : order.diachi,
          sdt : order.sdt,
          thanhtien : order.thanhtien,
          hinh_thuc : formatHinhThuc(order.hinhThucThanhToan),
          trangthai : formatTrangThai(order.trangThai),
          ngay_tao : formatDate(order.ngaytao),
          id_hinhthuc : order.hinhThucThanhToan,
          id_trang_thai : order.trangThai
         }
         newData.push(dataTable)

         const dataTableCT = {
          id: order.id,
          listSP: order.ct_donHangList
         }

         newDataCT.push(dataTableCT)
      }
      setData(newData);
      setDataCT(newDataCT);

      service.GetAllStatus().then(response => {
        setOptions(response.data);
      }).catch(error => {
        alert(" Sever không phản hồi ");
      });

    }).catch(error =>{
      alert(" Sever không phải hồi ");
    });


  }

  useEffect(() => {
    callAPIinit();
  }, []);

  const handleRowClick = (record, rowIndex) => {
    setID(record.id);
    setSelectedKey(record.trangthai);

    for(const order of dataCT){
      if(record.id === order.id){
        console.log(order.listSP);
        const listDataFinal = []
        for(const sp of  order.listSP){
          const dataSave = {
            key: sp.idrem,
            id: sp.idrem,
            appliedPrice: sp.gia,
            soluong:sp.soluong
          } 
          listDataFinal.push(dataSave);
        }
        setDataRem(listDataFinal);
      }
    }

 
 };

  const handleChange = (value, option) => {
    setSelectedKey(value);
  }

  const updateOrder = () => {
    let id_trang_thai = null
    for(const opt of options){
      if(opt.ten == selectedKey){
        id_trang_thai = opt.id
      }
    }

    if(id_trang_thai === null){
      alert("Trạng thái không hợp lệ");
      return
    }

    const data = {
      status : id_trang_thai
    }

    service.UpdateOrderStutus(id,data).then(res => {
      callAPIinit();
      alert("Cập nhật thành công");
    }).catch(error => {
      alert(" Sever không phản hồi ");
    });

  }



  return (
    <div>
      <div>
          <h1 className="title"> ĐƠN HÀNG </h1>
      </div>
      <div className="grid-container">
            <InputComponentPro className="readonly-input" placeholder="ID" values={id} />

            <Select
              showSearch
              style={{ width: '100%' }}  
              placeholder="Chọn trạng thái cho đơn hàng"  
              optionFilterProp="children" 
              onChange={handleChange}
              value={selectedKey} 
            >
             {options.map(opt => (
                <Option key={opt.id} value={opt.ten}></Option>
              ))}
          </Select>

          <ButtonClickComponent textButton="Cập nhật trạng thái" className="button-style" onClick={updateOrder}/>
            



            
        </div>
      <div>
          <Table  columns={columnsOrder} 
                  dataSource={data} 
                  pagination={{ pageSize: 5 }} 
                  onRow={(record, rowIndex) => {
                  return {
                    onClick: () => handleRowClick(record, rowIndex)
                  };
                }}
          />;
      </div>
      <div>
          <h1 className="title"> DANH SÁCH SẢN PHẨM CỦA ĐƠN HÀNG </h1>
      </div>
      <div>
      <Table 
            columns={columnsRem} 
            dataSource={dataRem}>
            pagination={{ pageSize: 5 }}
          </Table>

      </div>

    </div>
    
  )
}

export default OrderPage