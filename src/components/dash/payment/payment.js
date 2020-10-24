import React from 'react';
import PaymentTable from './paymentTable';
import * as Styles from './payment.css';
import Dropdown from '../../../utils/dropdown';

const Payment = (props) => {
    const tableData = [
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$1,3430",
            time: "15:30",
            transactionNo: "1234567890",
            status: "Pending"
        },
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$70,3430",
            time: "12:30",
            transactionNo: "1234567890",
            status: "Reconciled"
        },
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$5,3430",
            time: "12:30",
            transactionNo: "1234567890",
            status: "Reconciled"
        },
        {
            itemType: "Apple Mac Book 15” 250 SSD 12GB",
            price: "$2,3430",
            time: "14:30",
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
                <div className="w-1/2 flex">
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398378 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454Z" fill="#0E1D25" />
                            </svg>   <Styles.StyledInput placeholder="Search Payments" />
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
            <div className="flex my-4">
                <div className="w-1/2">
                    <Styles.PaymentSub>
                        Showing 1 to 10 of 500 Entries
                </Styles.PaymentSub>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-end">
                        <Styles.PaginationWarpper>
                        <Styles.PaginationItem>
                            Previous
                        </Styles.PaginationItem>
                        <Styles.PaginationItem status={'Active'} >
                            1
                        </Styles.PaginationItem>
                        <Styles.PaginationItem>
                            2
                        </Styles.PaginationItem>
                        <Styles.PaginationItem>
                            Next
                        </Styles.PaginationItem>
                        </Styles.PaginationWarpper>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Payment;