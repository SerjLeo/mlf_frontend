import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";

const MainLayout: React.FunctionComponent = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
