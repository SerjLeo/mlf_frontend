import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";

const Register = React.lazy(() => import('../pages/Auth/Register'));
const Login = React.lazy(() => import('../pages/Auth/Login'));
const Landing = React.lazy(() => import('../pages/Landing/Landing'));
const FastSignUp = React.lazy(() => import('../pages/Auth/FastSignUp'));
const RestorePassword = React.lazy(() => import('../pages/Auth/RestorePassword'));

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
                <Route path="email-signup" element={<FastSignUp/>}/>
                <Route path="restore-password" element={<RestorePassword/>}/>
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
