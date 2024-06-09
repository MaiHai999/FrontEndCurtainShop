import React, { useEffect, useState } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style'
import { Button , Modal,  Form, Select, message } from 'antd'
import{
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
}from'@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import { getBase64 } from '../../utills'
import * as ProductService from  '../../services/ProductService.js'
import {useMutationHooks} from '../../hook/useMutationHooks.js'
import Loading from '../../components/LoadingComponent/LoadingComponent.jsx'
import { useQuery } from '@tanstack/react-query'
import DrawerComponent from '../DrawerComponent/DrawerComponent.jsx'
import ModalComponent from '../ModalComponent/ModalComponent.jsx'
import InputComponentPro from '../InputComponent/InputComponentPro.jsx'


  
const Product = () => {
  const [content, setContent]=useState('')
  const [rowSelected, setRowSelected] =useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false)
  const [form] = Form.useForm();

  const [stateProduct, setstateProduct] = useState({
    tenremcua: "", 
    donvi: "", 
    baohanh: "", 
    xuatxu: "", 
    kichthuoc: "", 
    so_luong: "", 
    chatlieu: "", 
    idloairem: "",  
    gia: "",
    hinh_anh : "" 
  });
  const [stateProductUpdate, setstateProductUpdate] = useState({
    id: "", 
    tenremcua: "", 
    donvi: "", 
    baohanh: "", 
    xuatxu: "", 
    kichthuoc: "", 
    so_luong: "", 
    chatlieu: "", 
    idloairem: "",  
    gia: "",
    hinh_anh : "" 
  });
  
  const handleOnChange =(e) => {
    setstateProduct({
      ...stateProduct,
      [e.target.name] : e.target.value
    })
    console.log('e.target.name: ', e.target.name, e.target.value );
  }

  const handleOnChangeUpdate =(e) => {
    setstateProductUpdate({
      ...stateProductUpdate,
      [e.target.name] : e.target.value
    })
    console.log('e.target.name: ', e.target.name, e.target.value );
  }

  const handleOnSelect = (value) => {
    setstateProduct({
      ...stateProduct,
      idloairem: value
    });
  };

  const handleOnSelectUpdate = (value) => {
    setstateProductUpdate({
      ...stateProductUpdate,
      idloairem: value
    });
  };


  const mutation = useMutationHooks(
    (data) => {
      const { tenremcua, 
      donvi, 
      baohanh, 
      xuatxu, 
      kichthuoc, 
      so_luong, 
      chatlieu, 
      idloairem, 
      gia,
      hinh_anh} = data
      ProductService.createProduct({ tenremcua, 
        donvi, 
        baohanh, 
        xuatxu, 
        kichthuoc, 
        so_luong, 
        chatlieu, 
        idloairem, 
        gia,
        hinh_anh  
      }).then(res => {
        alert(" Thành công")
        setIsModalOpen(false)
        window.location.reload();
      }).catch(error => {
        alert(" Thất Bại")
        setIsModalOpen(false)
      });
      
    }
  )
  const mutationUpdate = useMutationHooks(
    (data) => {
      const { id,
      tenremcua, 
      donvi, 
      baohanh, 
      xuatxu, 
      kichthuoc, 
      so_luong, 
      chatlieu, 
      idloairem, 
      gia,
      hinh_anh} = data
      ProductService.updateProduct({ id,
        tenremcua, 
        donvi, 
        baohanh, 
        xuatxu, 
        kichthuoc, 
        so_luong, 
        chatlieu, 
        idloairem, 
        gia,
        hinh_anh  
      }).then(res => {
        alert(" Thành công")
        isModalOpenUpdate(false)
        window.location.reload();
      }).catch(error => {
        alert(" Thất Bại")
        
      })
    }
  )

  const getAllProducts = async() => {
    const res = await ProductService.getAllProduct()
    return res
  }

  const handleDeleteProduct =() =>{
    const data = {
      id: rowSelected
    }
    console.log(data);

    ProductService.deleteProduct(data).then(res => {
      alert(" Thành công")
      setIsModalOpenDelete(false)
      window.location.reload();
    }).catch(error => {
      alert(" Thất Bại")
      setIsModalOpenDelete(false)
    });

  }

  const {data, isLoading, isSuccess, isError} = mutation

  const {isLoading : isLoadingProducts, data : products} = useQuery({queryKey: ['products'], queryFn: getAllProducts})
  const renderAction =() =>{
    return(
      <div>
        <DeleteOutlined style={{color:'red', fontSize: '30px', cursor:'pointer',marginRight:'10px'}} onClick={() => setIsModalOpenDelete(true)}/>
        <EditOutlined style={{color:'yellow', fontSize: '30px', cursor:'pointer'}} onClick={() => setIsModalOpenUpdate(true)}/>
      </div>
    )
  }
  const columns = [
    {
        title: 'Tên',
        dataIndex: 'ten_rem',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Đơn vị',
        dataIndex: 'don_vi',
    },
    {
        title: 'Bảo hành',
        dataIndex: 'bao_hanh',
    },
    {
      title: 'Xuất xứ',
      dataIndex: 'xuat_xu',
    },
    {
      title: 'Kích thước',
      dataIndex: 'kich_thuoc',
    },
    {
      title: 'Số lượng',
      dataIndex: 'so_luong',
    },
    {
      title: 'Chât liệu',
      dataIndex: 'chat_lieu',
    },
    {
      title: 'Loại rèm',
      dataIndex: 'id_loai_rem',
    },
    {
      title: 'Giá',
      dataIndex: 'gia_goc',
    },
    {
      title: 'Tùy chọn',
      dataIndex: 'tuychon',
      render: renderAction  
    },
    
    ]
    const dataTable = products?.length && products?.map((product) => {
      return {...product, key: product._id}
    })

  const onFinish = () => {
    mutation.mutate(stateProduct)
    console.log('finished', stateProduct)
  }
  const onFinishUpdate = () => {
    mutationUpdate.mutate(stateProductUpdate)
    console.log('finishedUpdate', stateProductUpdate)
  }
  
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onFinish()
  }

  const handleOkUpdate = () => {
    onFinishUpdate()
  }


  const handleCancelDelete= () =>{
    setIsModalOpenDelete(false)
  } 
  const handleCancelUpdate= () =>{
    setIsModalOpenUpdate(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setstateProduct({
      tenremcua: "", 
      donvi: "", 
      baohanh: "", 
      xuatxu: "", 
      kichthuoc: "", 
      trangthai: "", 
      chatlieu: "", 
      idloairem: "",  
      gia: "",
      hinh_anh : "" 
    })
    form.resetFields()
  };
  const handleOnChangeAvatar = async ({fileList}) => {
    const file = await fileList[0]
    if(!file.url && !file.preview){
      file.preview = await getBase64(file.originFileObj);
    }
    setstateProduct({
      ...stateProduct,
      hinh_anh : file.preview
    })
  }
  const handleOnChangeAvatarUpdate = async ({fileList}) => {
    const file = await fileList[0]
    if(!file.url && !file.preview){
      file.preview = await getBase64(file.originFileObj);
    }
    setstateProductUpdate({
      ...stateProductUpdate,
      hinh_anh : file.preview
    })
  }
  const handleRowClick = (record, rowIndex) => {
    setRowSelected(record.id)
    setContent(record)
  }
  return (
    <div>
      <WrapperHeader> Quản lý sản phẩm </WrapperHeader>
      <div style={{marginTop: '10px'}}>
        <Button style={{height:'150px', width: '150px', borderRadius:'6px', borderStyle: 'dashed'}} onClick={() => setIsModalOpen(true)}>
          <PlusOutlined style={{fontSize: '60px'}}/>
        </Button>
      </div>
      <TableComponent columns={columns} isLoading={isLoadingProducts} data={dataTable}
                       onRow={(record, rowIndex) => {
                        return {
                          onClick: () => handleRowClick(record, rowIndex)
                        };
                      }}
      />
      <ModalComponent title="Tạo sản phẩm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer= {null}>
        <Loading isLoading={isLoading}>
          <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label="Tên Rèm Cửa"
            name="tenremcua"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.tenremcua} onChange={handleOnChange} name='tenremcua' />
          </Form.Item>

          <Form.Item
            label="Đơn Vị"
            name="donvi"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.donvi} onChange={handleOnChange} name='donvi' />
          </Form.Item >

          <Form.Item
            label="Bảo Hành"
            name="baohanh"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.baohanh} onChange={handleOnChange} name='baohanh' />
          </Form.Item>

          <Form.Item
            label="Xuất Xứ"
            name="xuatxu"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.xuatxu} onChange={handleOnChange} name='xuatxu' />
          </Form.Item>

          <Form.Item
            label="Kích Thước"
            name="kichthuoc"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.kichthuoc} onChange={handleOnChange} name='kichthuoc' />
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="so_luong"
            rules={[
              { required: true, message: 'Không Được Bỏ Trống!' },
              { pattern: /^[0-9]*$/, message: 'Chỉ chấp nhận số nguyên!' }
            ]}
          >
            <InputComponent value={stateProduct.so_luong} onChange={handleOnChange} name='so_luong' />
          </Form.Item>

          <Form.Item
            label="Chất Liệu"
            name="chatlieu"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.chatlieu} onChange={handleOnChange} name='chatlieu' />
          </Form.Item>

          <Form.Item
            label="Giá cả "
            name="gia"
            rules={[
              { required: true, message: 'Không Được Bỏ Trống!' },
              { pattern: /^[0-9]*$/, message: 'Chỉ chấp nhận số nguyên!' }
            ]}
          >
            <InputComponent value={stateProduct.gia} onChange={handleOnChange} name='gia' />
          </Form.Item>

          <Form.Item
            label="Id Loại Rèm"
            name="idloairem"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <Select value={stateProduct.idloairem} onChange={handleOnSelect}
              options={[
                {
                  value: '1',
                  label: 'Rèm cửa',
                },
                {
                  value: '2',
                  label: 'Rèm vải',
                },
                {
                  value: '3',
                  label: 'Rèm cuốn',
                },
                {
                  value: '4',
                  label: 'Rèm Roman',
                },
                {
                  value: '5',
                  label: 'Rèm văn phòng',
                },
                {
                  value: '6',
                  label: 'Rèm sáo gỗ',
                },
                {
                  value: '7',
                  label: 'Rèm sáo nhôm',
                },
                {
                  value: '8',
                  label: 'Rèm cầu vồng',
                },
                {
                  value: '9',
                  label: 'Rèm sợi chỉ',
                },
                {
                  value: '10',
                  label: 'Rèm phòng tắm',
                },

              ]}
              />
          </Form.Item>

          <Form.Item
            label="Hình Ảnh"
            name="hinh_anh"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <WrapperUploadFile onChange={handleOnChangeAvatar} maxCount={1}>
              <Button>
                Select File
              </Button>
              {stateProduct?.hinh_anh && (
                <img src= {stateProduct?.hinh_anh} style={{
                  height: '60px',
                  width: '60px%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginLeft: '10px',
                }} alt= "avatar" />
              )}
            </WrapperUploadFile>
            
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>
      <ModalComponent title='Chi tiết sản phẩm' isOpen={isModalOpenUpdate} onOk={handleOkUpdate} onCancel={handleCancelUpdate} onClose={() => setIsModalOpenUpdate(false)} width="40%">
          <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label="ID"
            name="id_rem_cua"
            //rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.id=rowSelected} onChange={handleOnChangeUpdate} placeholder={rowSelected} />
          </Form.Item>
          <Form.Item
            label="Tên Rèm Cửa"
            name="tenremcua"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.tenremcua} onChange={handleOnChangeUpdate} name='tenremcua' content={content.ten_rem}/>
          </Form.Item>

          <Form.Item
            label="Đơn Vị"
            name="donvi"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.donvi} onChange={handleOnChangeUpdate} name='donvi'content={content.don_vi} />
          </Form.Item >

          <Form.Item
            label="Bảo Hành"
            name="baohanh"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.baohanh} onChange={handleOnChangeUpdate} name='baohanh'content={content.bao_hanh}/>
          </Form.Item>

          <Form.Item
            label="Xuất Xứ"
            name="xuatxu"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.xuatxu} onChange={handleOnChangeUpdate} name='xuatxu' content={content.xuat_xu}/>
          </Form.Item>

          <Form.Item
            label="Kích Thước"
            name="kichthuoc"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.kichthuoc} onChange={handleOnChangeUpdate} name='kichthuoc' content={content.kich_thuoc}/>
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="so_luong"
            rules={[
              { required: true, message: 'Không Được Bỏ Trống!' },
              { pattern: /^[0-9]*$/, message: 'Chỉ chấp nhận số nguyên!' }
            ]}
          >
            <InputComponent value={stateProductUpdate.so_luong} onChange={handleOnChangeUpdate} name='so_luong' content={content.so_luong}/>
          </Form.Item>

          <Form.Item
            label="Chất Liệu"
            name="chatlieu"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProductUpdate.chatlieu} onChange={handleOnChangeUpdate} name='chatlieu' content={content.chat_lieu}/>
          </Form.Item>

          <Form.Item
            label="Giá cả "
            name="gia"
            rules={[
              { required: true, message: 'Không Được Bỏ Trống!' },
              { pattern: /^[0-9]*$/, message: 'Chỉ chấp nhận số nguyên!' }
            ]}
          >
            <InputComponent value={stateProductUpdate.gia} onChange={handleOnChangeUpdate} name='gia' content={content.gia_goc}/>
          </Form.Item>

          <Form.Item
            label="Id Loại Rèm"
            name="idloairem"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <Select value={stateProductUpdate.idloairem} onChange={handleOnSelectUpdate} defaultValue={content.id_loai_rem} 
              options={[
                {
                  value: '1',
                  label: 'Rèm cửa',
                },
                {
                  value: '2',
                  label: 'Rèm vải',
                },
                {
                  value: '3',
                  label: 'Rèm cuốn',
                },
                {
                  value: '4',
                  label: 'Rèm Roman',
                },
                {
                  value: '5',
                  label: 'Rèm văn phòng',
                },
                {
                  value: '6',
                  label: 'Rèm sáo gỗ',
                },
                {
                  value: '7',
                  label: 'Rèm sáo nhôm',
                },
                {
                  value: '8',
                  label: 'Rèm cầu vồng',
                },
                {
                  value: '9',
                  label: 'Rèm sợi chỉ',
                },
                {
                  value: '10',
                  label: 'Rèm phòng tắm',
                },

              ]}
              />
          </Form.Item>

          <Form.Item
            label="Hình Ảnh"
            name="hinh_anh"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <WrapperUploadFile onChange={handleOnChangeAvatarUpdate} maxCount={1}  > 
              <Button>
                Select File
              </Button>
              {content.hinh_anh && (
                <img src= {content.hinh_anh} style={{
                  height: '60px',
                  width: '60px%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginLeft: '10px',
                }} alt= "avatar" />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
          </Form.Item>
          </Form>
      </ModalComponent>
      <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
          <div>Bạn có chắc xóa sản phẩm này không?</div>
      </ModalComponent>

    </div>
  )
}

export default Product