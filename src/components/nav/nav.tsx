import React from 'react';
import { NavLink } from "react-router-dom";
import AuthStatus from "../authStatus";
import Google from "../googleLogger/google";

const Nav = () => {
    return (

         <div className="lb-header">
             <AuthStatus />
             <NavLink to="/reg">Registration</NavLink>
             <NavLink to="/login">Login</NavLink>
             <NavLink to="/main">Home page</NavLink>
             <NavLink to="/delete">Delete user</NavLink>
                 
         </div>
    );
};

export default Nav;