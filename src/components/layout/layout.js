import React from 'react';
import Header from '../header/header'
import SideBar from '../sidebar/sidebar';
import styled from "styled-components";
import DashBoard from "../dash/dashboard";

const DashBoardContainer = styled.div`
padding: 20px;
margin-left: auto;
margin-right: auto;
background: #F7F8FA;
height: 100%;
`

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex mb-4">
                <div className="w-1/5">
                    <SideBar />
                </div>
                <div className="w-full">
                    <DashBoardContainer>
                    <DashBoard />
                    </DashBoardContainer>
                </div>
            </div>
        </>
    )
}

export default Layout;