import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing/Landing";

const AppRouter = () => {
    const globalRoutes = () => {
        return (
            <Route
                path="/"
                element={<MainLayout/>}
            >
                <Route index element={<Landing/>} />
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route
                    path="*"
                    element={<NotFound/>}
                />
            </Route>
        )
    }
    return (
        <Routes>
            {globalRoutes()}
            <Route path="/" element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            }/>
        </Routes>
    );
};

export default AppRouter;
