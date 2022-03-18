import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element
}

const PrivateRoute = ({children}: PrivateRouteProps) => {
    const isAuth = false

    if(!isAuth) return <Navigate to={'/login'} replace/>

    return children;
};

export default PrivateRoute;
