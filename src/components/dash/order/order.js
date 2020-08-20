import React from 'react';
import * as Styles from './order.css'
import OrderGraph from './orderGraph';
import SideDetailCard from './sidedetails';

const Order = () => {
    const data = [
        {
            title: 'Orders',
            reconPay: 750,
            unReconPay: 25
        },
        {
            title: 'Payments',
            reconPay: 65,
            unReconPay: 350
        }
    ]
    return (
        <>
            <Styles.OrderGrid>
                <Styles.OrderColumns>
                    <Styles.GraphWrapper>
                        <Styles.StyledTime>
                            {`Today ${new Date().toJSON().slice(0, 10).replace(/-/g, '/')}`}
                        </Styles.StyledTime>
                        <Styles.GraphContainer>
                        <OrderGraph />
                        </Styles.GraphContainer>
                    </Styles.GraphWrapper>
                </Styles.OrderColumns>
                <Styles.OrderColumns>
                    {data.map(item => <SideDetailCard title={item.title} reconPay={item.reconPay} unReconPay={item.unReconPay} />)}
                </Styles.OrderColumns>
            </Styles.OrderGrid>
        </>
    )
}

export default Order;
