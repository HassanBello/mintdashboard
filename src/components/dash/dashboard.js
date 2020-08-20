import React from 'react';
import Transaction from './transaction/transactions'
import Order from './order/order';
import styled from "styled-components";

const P20 = styled.div`
padding: 20px;
`

const DashBoard = () => {
    return (
        <>
        <Transaction />
        <P20 />
        <Order />
        </>
    )
}

export default DashBoard;
