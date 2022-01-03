import React from 'react';
import {AuthContext} from "../App";
import {useLocation, Navigate} from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let auth = React.useContext(AuthContext);
    let location = useLocation();

    if (!auth.user) {
        alert('Необходимо зарегистрироваться')
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;