import React from 'react';
import * as Styles from './payment.css'

const PaymentTable = (props) => {
    console.log(props.data);
    return (
        <Styles.StyledTable>
            <Styles.TableHead>
                <Styles.TableRow>
                    <Styles.TableHeader colspan={"2"}>
                        Item Type
                </Styles.TableHeader>
                    <Styles.TableHeader colspan={"1"}>
                        Price
                </Styles.TableHeader>
                    <Styles.TableHeader colspan={"2"}>
                        Transaction No
                </Styles.TableHeader>
                    <Styles.TableHeader colspan={"1"}>
                        Time
                </Styles.TableHeader>
                    <Styles.TableHeader colspan={"2"}>
                        Status
                </Styles.TableHeader>
                    <Styles.TableHeader colspan={"1"}>

                    </Styles.TableHeader>
                </Styles.TableRow>
            </Styles.TableHead>
            <tbody>
                {props.data.map(item => {
                    return (
                        <Styles.TableRow>
                            <Styles.TableData color={"dark"}>
                                {item.itemType}
                            </Styles.TableData>
                            <Styles.TableData color={"light"}>
                                {item.price}
                            </Styles.TableData>
                            <Styles.TableData color={"light"}>
                                {item.transactionNo}
                            </Styles.TableData>
                            <Styles.TableData color={"light"}>
                                {item.time}
                            </Styles.TableData>
                            <Styles.TableData>
                                <Styles.StatusWrapper color={item.status}>
                                    {item.status === "Pending" ? <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4.5" cy="4.5" r="4.5" fill="#EBC315" />
                                    </svg> : <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4.5" cy="4.5" r="4.5" fill="#27AE60" />
                                        </svg>}&nbsp;
                                    {item.status}
                                </Styles.StatusWrapper>
                            </Styles.TableData>
                            <Styles.TableData>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                            </Styles.TableData>
                        </Styles.TableRow>
                    )
                })}
            </tbody>
        </Styles.StyledTable>
    );
}

export default PaymentTable;