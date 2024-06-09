import styled from "styled-components"
import {Card, InputNumber} from 'antd'
export const WrapperListOrder = styled.div`
`
export const WrapperInputNumber = styled(InputNumber)`
&.ant-input-number.ant-input-number-sm {
    width: 60px;
    height: 25px;
    border-top: none;
    border-bottom: none;
    border: 1px solid #ccc;
    border-radius: 4px; 
    &.ant-input-number-handler-wrap{
        display: none;
}
`
export const WrapperItemOrder = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  background: #fff;
  margin-top: 12px;
`
export const WrapperCountOrder  = styled.div`
display: flex;
align-items: center;
width: 100px;

`
export const WrapperRight = styled.div`
  width: 320px;
  margin-left: 20px;
  display: flex ;
  flex-direction: column; 
  gap: 10px; 
  align-items: center
`
export const WrapperLeft = styled.div`
  width: 910px;
`
export const WrapperInfo = styled.div`
  padding: 17px 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  width: 100%
`
export const WrapperTotal = styled.div`
  display: flex;
   align-items: flex-start; 
   justify-content: space-between;
    padding: 17px 20px;
    background: #fff ;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
`
export const WrapperStatus = styled.div`
  display:flex;
  align-item:flex-start;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(235, 235, 240);
  flex-direction:column;
`