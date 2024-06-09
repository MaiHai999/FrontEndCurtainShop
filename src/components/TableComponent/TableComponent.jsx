import { Table } from 'antd';
import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import Loading from '../LoadingComponent/LoadingComponent';
const TableComponent = (props) => {
const {selectionType = 'checkbox', data =[], isLoading= false, columns=[] } = props
 
// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: (record) => ({
//       disabled: record.name === 'Disabled User',
//       // Column configuration not to be checked
//       name: record.name,
//     }),
//   }
  const paginationConfig = {
    pageSize: 7 // Số sản phẩm hiển thị trên mỗi trang
  };
  
  return (
    <Loading isLoading={isLoading}>
      <Table
        // rowSelection={{
        //   type: selectionType,
        //   ...rowSelection,
        // }}
        columns={columns}
        dataSource={data}
        pagination={paginationConfig}
        {...props}
      />
    </Loading>
  )
}

export default TableComponent