import React from 'react';
import * as Styles from './order.css'

const SideDetailCard = (props) => {
    const reconPecent = (props.reconPay/(props.reconPay + props.unReconPay)) * 100
    return (
        <Styles.SideCard>
        <Styles.SideCardHeader>
            {props.title}
        </Styles.SideCardHeader>
        <div className="flex space-y-4 mb-4">
        <Styles.GreenLine width={reconPecent} /><Styles.YellowLine width={100 - reconPecent}  />
        </div>
        <p>
        <Styles.SideCardSmallText>
        Un-reconcilled Payments: 
        </Styles.SideCardSmallText>
        <Styles.YellowTxt>
            {props.unReconPay}
        </Styles.YellowTxt>
        </p>
        <p>
        <Styles.SideCardSmallText>
        Reconcilled Payments:
        </Styles.SideCardSmallText>
        <Styles.GreenTxt>
            {props.reconPay}
        </Styles.GreenTxt>
        </p>
        <p>
        <Styles.SideCardSmallText>
        Total Payments:
        </Styles.SideCardSmallText>
        <Styles.InfoTxt>
            {props.reconPay + props.unReconPay}
        </Styles.InfoTxt>
        </p>
        </Styles.SideCard>
    );
}

export default SideDetailCard;