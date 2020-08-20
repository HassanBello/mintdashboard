import React from 'react';
import Transaction from './transaction/transactions'
import Order from './order/order';
import styled from "styled-components";
import Payment from './payment/payment';

const P20 = styled.div`
padding: 20px;
`

const DashBoard = () => {
    return (
        <>
        <Transaction />
        <P20 />
        <Order />
        <P20 />
        <Payment />
        </>
    )
}

export default DashBoard;
