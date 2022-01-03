import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../App";
import Google from '../googleLogger/google';

const Login = () => {
    let navigate = useNavigate();
    let location: any = useLocation();
    let auth = React.useContext(AuthContext);
    let from = location.state?.from?.pathname || '/main';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        const userData = JSON.parse(localStorage.getItem(username) || '{}');
        if (localStorage.getItem(username) && password === userData.pass) {
                auth.signin(username, () => {
                navigate(from, { replace: true });
            });
        } else {
            alert("Неверное имя пользователя или пароль");
        }
    }

    return (
        <div className="login-box">
            <form className="email-login" onSubmit={handleSubmit}>
                <div className="u-form-group">
                    <input type="text" name='username' placeholder="Login"/>
                </div>
                <div className="u-form-group">
                    <input type="password" name='password' placeholder="Password"/>
                </div>
                <div className="u-form-group">
                    <button type="submit">Log in</button>
                </div>
                <div className="g-signin">
                     <Google/>
                 </div>
            </form>

        </div>
    );
};

export default Login;