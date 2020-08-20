import React from 'react';
import PaymentTable from './paymentTable';

const Payment = (props) => {
    const tableData = [
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$7,3430",
            time: "12:30",
            transactionNo: "1234567890",
            status: "Pending"
        },
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$7,3430",
            time: "12:30",
            transactionNo: "1234567890",
            status: "Reconciled"
        },
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$7,3430",
            time: "12:30",
            transactionNo: "1234567890",
            status: "Pending"
        },
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$7,3430",
            time: "12:30",
            transactionNo: "1234567890",
            status: "Reconciled"
        }
    ]
    return (
        <div>
            <PaymentTable data={tableData} />
        </div>
    );

}

export default Payment;