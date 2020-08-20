import React from 'react';
import PaymentTable from './paymentTable';
import * as Styles from './payment.css';
import Dropdown from '../../../utils/dropdown';

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
    ];
    const options = [
        {
            id: 0,
            title: 'All',
            selected: true
        },
        {
            id: 1,
            title: 'Reconciled',
            selected: false
        },
        {
            id: 2,
            title: 'Un-Reconciled',
            selected: false
        },
        {
            id: 3,
            title: 'Settled',
            selected: false
        },
        {
            id: 4,
            title: 'Unettled',
            selected: false
        }
    ]
    return (
        <>
            <div className="flex">
                <div className="w-full mb-4">
                    <Styles.PaymentHeader>
                        Payments
                    </Styles.PaymentHeader>
                </div>
            </div>
            <div className="flex mb-4">
                <div className="w-1/4 flex">
                    <Styles.PaymentSub>
                        Showing <Styles.PageSize>20&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="#1875F0" width="9" height="9" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg></Styles.PageSize> out of 500 payments
                    </Styles.PaymentSub>
                </div>
                <div className="w-1/2">
                    <Styles.StyledInput placeholder="Search Payments" />
                </div>
                <div className="w-1/6 flex">
                    <Styles.PaymentSub>
                        Show
                </Styles.PaymentSub>
                    &nbsp;
                    <Dropdown
                        title="All"
                        list={options}
                    />
                </div>
            </div>
            <PaymentTable data={tableData} />
            <div className="flex">
                <div className="w-1/2">
                    <Styles.PaymentSub>
                        Showing 1 to 10 of 500 Entries
                </Styles.PaymentSub>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-end">
                        <Styles.PaymentSub>
                            Showing 1 to 10 of 500 Entries
                </Styles.PaymentSub>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Payment;