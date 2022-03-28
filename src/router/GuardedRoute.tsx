import React from 'react';
import { Navigate } from 'react-router-dom';
import useTypedSelector from "../hooks/useTypedSelector";

type GuardedRouteProps = {
    children: JSX.Element
    isAuth: boolean
    permission?: 'auth' | 'notAuth'
}

const GuardedRoute = ({children, isAuth, permission = 'auth'}: GuardedRouteProps) => {

    if(!isAuth && permission === 'auth') return <Navigate to='/login' replace/>
    if(isAuth && permission === 'notAuth') return <Navigate to='/dashboard' replace/>

    return children;
};

export default GuardedRoute;
