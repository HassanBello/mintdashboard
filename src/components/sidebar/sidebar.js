import React from 'react';
import * as Styles from './sidebar.css';
import * as GlobalStyle from '../../styles/styles.css';

const SideBar = () => {
    return (
        <div className="w-full bg-white">
            <Styles.SideBarCol>
                <Styles.P20 />
                <Styles.SideBarGroup>
                    <Styles.InvoiceButton>
                        Generate Invoice
                    </Styles.InvoiceButton>
                </Styles.SideBarGroup>
            </Styles.SideBarCol>
        </div>
    )
}

export default SideBar;