import React from 'react';
import Header from '../header/header'
import SideBar from '../sidebar/sidebar';
import styled from "styled-components";

const DashBoardContainer = styled.div`
padding: 20px;
margin-left: auto;
margin-right: auto;
`

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex mb-4">
                <div className="w-1/5">
                    <SideBar />
                </div>
                <div className="w-full dash-bg">
                    <DashBoardContainer>
                    
                    </DashBoardContainer>
                </div>
            </div>
        </>
    )
}

export default Layout;