import React from 'react';
import * as Styles from './payment.css'

const PaymentTable = (props) => {
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
                <Styles.TableRow>
                    <Styles.TableData>
                        Apple Mac Book 15” 250 SSD 12GB
                </Styles.TableData>
                    <Styles.TableData>
                        $73430
                </Styles.TableData>
                    <Styles.TableData>
                        1234567890
                </Styles.TableData>
                    <Styles.TableData>
                        A12:30
                </Styles.TableData>
                    <Styles.TableData>
                        <Styles.StatusWrapper>
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#27AE60" />
                            </svg>&nbsp; Reconciled
                        </Styles.StatusWrapper>
                    </Styles.TableData>
                    <Styles.TableData>

                    </Styles.TableData>
                </Styles.TableRow>
            </tbody>
        </Styles.StyledTable>
    );
}

export default PaymentTable;