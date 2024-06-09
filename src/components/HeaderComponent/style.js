import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: rgb(135, 206, 235);
    padding: 10px 0px;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1930px;
`
export const WrapperTextHeader = styled.span`
    font-size: 25px;
    color: rgb(150, 71, 52);
    font-weight: bold;
    text-align: left;
`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    algin-items: center;
    color: rgb(150, 71, 52);
    gap: 10px;
    font-size: 12px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: rgb(150, 71, 52);
    white-space: nowrap;
`
