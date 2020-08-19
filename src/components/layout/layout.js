import React from 'react';
import Header from '../header/header'
import SideBar from '../sidebar/sidebar';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex mb-4">
                <div className="w-1/5">
                    <SideBar />
                </div>
                <div className="w-3/4">
                    kjfjfd
                </div>
            </div>
        </>
    )
}

export default Layout;