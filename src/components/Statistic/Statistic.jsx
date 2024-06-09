import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { InputNumber, Button, Col, Row } from 'antd';
import * as AdminService from  '../../services/AdminService'
import { useQuery } from '@tanstack/react-query';

const Statistic = () => {
  const [stateStatistic, setStateStatistic] =useState('')
  const [Year, setYear] = useState(2024)

  const onChange = (newValue) => {
    setYear(newValue);
  }

  const handleView = async() => {
    const res = await AdminService.statistic(Year)
    setStateStatistic(res.data)
  }


  const chartData = Array.from({ length: 12 }, (_, index) => {
    console.log(stateStatistic['6']);
    const month = String(index + 1);
    return {
      month: month,
      revenue: stateStatistic[month] || 0,
    };
  });


  return (
    <div style={{ display: 'flex', marginTop: '35px'}}>
      <Row>
        <Col span={4} style={{ display: 'flex', flexDirection: 'column' }}>
          <InputNumber min={2024} max={2034} defaultValue={2024} onChange={onChange} />
          <Button
            style={{ marginTop: '20px', color: 'blueviolet', height: '40px'}}
            onClick={handleView}
          >
            Xem doanh thu
          </Button>
        </Col>
        <Col span={20}>
          <BarChart width={1300} height={800} data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </Col>
      </Row>
    </div>
  );
};
export default Statistic;