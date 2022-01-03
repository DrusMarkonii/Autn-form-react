import React from 'react';
import {fap} from "./fap";
import {AuthContext} from "../App";




const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    let [user, setUser] = React.useState<any>(null);

    let signin = (newUser: string, callback: VoidFunction) => {
        return fap.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return fap.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;