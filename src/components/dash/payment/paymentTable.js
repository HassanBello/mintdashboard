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
                submit
                </Styles.TableData>
                <Styles.TableData>
                
                </Styles.TableData>
            </Styles.TableRow>
        </tbody>
    </Styles.StyledTable>
    );
}

export default PaymentTable;