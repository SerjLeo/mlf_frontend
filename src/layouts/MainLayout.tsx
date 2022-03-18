import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";
import Spinner from "../components/Spinner/Spinner";

const MainLayout: React.FunctionComponent = () => {
    return (
        <div>
            <Header/>
            <Suspense fallback={<Spinner/>}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default MainLayout;
