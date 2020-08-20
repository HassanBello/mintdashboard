import React from 'react';
import PaymentTable from './paymentTable';
import * as Styles from './payment.css';
import DropDown from '../../../utils/dropdown'

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
    const location =[
        {
            id: 0,
            title: 'New York',
            selected: false,
            key: 'location'
        },
        {
          id: 1,
          title: 'Dublin',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'California',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Istanbul',
          selected: false,
          key: 'location'
        },
        {
          id: 4,
          title: 'Izmir',
          selected: false,
          key: 'location'
        },
        {
          id: 5,
          title: 'Oslo',
          selected: false,
          key: 'location'
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
                <div className="w-1/4">
                    <DropDown list={location} />
                </div>
            </div>
            <PaymentTable data={tableData} />
        </>
    );

}

export default Payment;