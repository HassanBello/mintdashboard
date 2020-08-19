import React from 'react';
import * as Styles from './transaction.css';

const Transaction = () => {
    return (
        <Styles.TransactionGrid>
            <Styles.TransactionCard>
                <Styles.CardColumn>
                    <Styles.CardHeader>Daily Transaction Volume</Styles.CardHeader>
                    <Styles.TransactionSub>2,342</Styles.TransactionSub>
                </Styles.CardColumn>
                <div>
                </div>
            </Styles.TransactionCard>
            <Styles.TransactionCard>
                lfdkldfk
            </Styles.TransactionCard>
            <Styles.TransactionCard>
                lfdkldfk
            </Styles.TransactionCard>
            <Styles.TransactionCard>
                lfdkldfk
            </Styles.TransactionCard>
        </Styles.TransactionGrid>
    )
}

export default Transaction;
