import React from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../App";

const AuthStatus = () => {
    let auth = React.useContext(AuthContext);
    let navigate = useNavigate();


    if (!auth.user) {
        return <h1>Необходимо войти в систему</h1>;
    }

    return (
        <h1>
            Welcome {auth.user}!{' '} 
            <button
                onClick={() => {
                    auth.signout(() => navigate('/'));
                }}
            >
                Sign out
            </button>
        </h1>
    );
};

export default AuthStatus;