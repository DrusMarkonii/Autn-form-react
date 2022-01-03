import React, { useState} from 'react';
import {AuthContext} from "../../App";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Google from '../googleLogger/google';

const Reg = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [rePass, setRePass] = useState('');
    let navigate = useNavigate();
    let location: any = useLocation();
    let auth = React.useContext(AuthContext);

    let from = location.state?.from?.pathname || '/main';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {email, pass, login, rePass};
        if (pass !== rePass) {
            alert('Неверный пароль!!!')
            setPass('');
            setRePass('')
        } else if (!localStorage.getItem(login)) {
            localStorage.setItem(login, JSON.stringify(data))
            auth.signin(login, () => {
                navigate(from, { replace: true });
            });
        } else {
            alert("Такой пользователь уже существует");
        }

        setEmail('');
        setPass('');
    }

    return (
        <div className="login-box">
            <form className="email-signup" onSubmit={handleSubmit}>
                <div className="u-form-group">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="u-form-group">
                    <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Repeat password" value={rePass} onChange={(e) => setRePass(e.target.value)}/>
                </div>
                <div>
                <p>Создавая учетную запись, вы соглашаетесь с нашим <Link to="/info" style={{"color":"dodgerblue"}}>Условия и конфиденциальность</Link>.</p>
                </div>
                <div className='reg-form-box'>
                    <div className="u-form-group">
                        <button type="submit" >Sign Up</button>
                    </div>
                    <div className="g-signin">
                        <Google/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Reg;