import React from 'react';
import {Route, Routes} from 'react-router-dom';
import GuardedRoute from "./GuardedRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import useTypedSelector from "../hooks/useTypedSelector";

const Register = React.lazy(() => import('../pages/Auth/Register'));
const Login = React.lazy(() => import('../pages/Auth/Login'));
const Landing = React.lazy(() => import('../pages/Landing/Landing'));
const FastSignUp = React.lazy(() => import('../pages/Auth/FastSignUp'));
const RestorePassword = React.lazy(() => import('../pages/Auth/RestorePassword'));

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.user)
    const globalRoutes = () => {
        return (
            <Route
                path="/"
                element={<MainLayout/>}
            >
                <Route index element={<Landing/>} />
                <Route path="login" element={
                    <GuardedRoute isAuth={isAuth} permission="notAuth">
                        <Login/>
                    </GuardedRoute>}/>
                <Route path="register" element={
                    <GuardedRoute isAuth={isAuth} permission="notAuth">
                        <Register/>
                    </GuardedRoute>}/>
                <Route path="email-signup" element={
                    <GuardedRoute isAuth={isAuth} permission="notAuth">
                        <FastSignUp/>
                    </GuardedRoute>}/>
                <Route path="restore-password" element={
                    <GuardedRoute isAuth={isAuth} permission="notAuth">
                        <RestorePassword/>
                    </GuardedRoute>}/>
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
            <Route
                path="/"
                element={<MainLayout/>}
            >
                <Route path="/dashboard" element={
                    <GuardedRoute isAuth={isAuth}>
                        <Dashboard/>
                    </GuardedRoute>
                }/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
