import React from 'react';
import {AuthContext} from "../../App";
import {useNavigate} from "react-router-dom";

const DeletePage = () => {
    let navigate = useNavigate();
    let auth = React.useContext(AuthContext);
    const handleClick = () => {
        localStorage.removeItem(auth.user);
        auth.signout(() => navigate('/'));
    }
    return (
        <div className='pages u-form-group'>
            <button type="submit" className="delete" onClick={handleClick}>Удалить польвоателя</button>
        </div>
    );
};

export default DeletePage;