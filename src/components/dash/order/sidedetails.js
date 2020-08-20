import React from 'react';
import * as Styles from './order.css'

const SideDetailCard = (props) => {
    return (
        <Styles.SideCard>
        <Styles.SideCardHeader>
            {props.title}
        </Styles.SideCardHeader>
        <div className="flex space-y-4">
        <Styles.GreenLine width={props.reconPay} /><Styles.YellowLine width={props.unReconPay}  />
        </div>
        </Styles.SideCard>
    );
}

export default SideDetailCard;