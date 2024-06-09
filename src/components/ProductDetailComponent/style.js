import styled from "styled-components"
import {Image,Col, InputNumber} from "antd"
export const WrapperStyleImageSmall = styled(Image)`
height: 64px;
width: 64px;
`
export const WrapperStyleColImage = styled(Col)`
flex-basis: unset;
display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
color: rgb(36,36,36);
font-size: 30px;
font-weigh: 300;
line-height: 32px;
word-break: break-word;
`
export const WrapperStyleTextSell = styled.span`
font-size: 20px;
color: rgb(120,120,120);
line-height: 24px;
`
export const WrapperPriceProduct = styled.div`
background: rgb(250,250,250);
border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.div`
padding: 10px;
font-size: 32px;
font-weigh: 500;
line-height: 40px;
margin-right: 8px;
margin-top:10px;
color: red;
`
export const WrapperAddressProduct = styled.div`
span.address{
    text-decoration: underline;
    font-size: 15px;
    font-weigh: 500;
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
};
span.change{
    color: rgb(11,116,229);
    font-size: 16px;
    font-weigh: 500;
    line-height: 24px;
}
`

export const WrapperQualityProduct = styled.div`
display: flex;
gap; 4px;
align-items: center;
border-radius: 4px;
width: 60px;
border: 1px solid #ccc;

`
export const WrapperInputNumber = styled(InputNumber)`
&.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;
    &.ant-input-number-handler-wrap{
        display: none;
}
`

export const WrapperButton = styled.span`
    border: 1px solid #ccc;
`