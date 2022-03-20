import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";
import Spinner from "../components/Spinner/Spinner";
import LayoutsModule from "./styles/Layouts.module.scss"

const MainLayout: React.FunctionComponent = () => {
    return (
        <div className={LayoutsModule.app__container}>
            <Header/>
            <div className={LayoutsModule.app__content}>
                <Suspense fallback={<Spinner/>}>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    );
};

export default MainLayout;
