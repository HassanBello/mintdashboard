import React from 'react';
import * as Styles from './transaction.css';
import TransactionCard from './transactionCard'


const Transaction = () => {
    const data = [
        {
            title: "Daily Transaction Value",
            value: "1900",
            data: [1500, 1560, 1570]
        },
        {
            title: "Total Transaction Value",
            value: "₦4,000,000",
            data: [35000, 35000, 39000]
        },
        {
            title: "Total Transaction Volume",
            value: "452,000",
            data: [44000, 44000, 44600]
        },
        {
            title: "Total Transaction Value",
            value: "₦4,000,000",
            data: [35000, 350000, 390000]
        }
    ]
    return (
        <Styles.TransactionGrid>
            {data.map(item => <TransactionCard data={item.data} title={item.title} value={item.value} />)}
        </Styles.TransactionGrid>
    )
}

export default Transaction;
