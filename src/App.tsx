import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Login from "./components/login/login";
import Reg from "./components/registration/reg";
import Page404 from "./components/errorPage/page404";
import "./app.css"
import MainPage from "./components/mainPage/mainPage";
import AuthProvider from "./components/authProvider";
import RequireAuth from "./components/requireAuth";
import InfoPage from "./components/infoPage/infoPage";
import DeletePage from "./components/deletePage/deletePage";


interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);


function App() {


  return (
    <div className="App">
      <AuthProvider>
         <Nav/>
            <Routes>
                <Route path="reg" element={<Reg/>} />
                <Route path="/" element={<Login/>} />
                <Route path="info" element={<InfoPage/>} />
                <Route path="login" element={<Login/>} />
                <Route path="/main"
                    element={
                        <RequireAuth>
                            <MainPage />
                        </RequireAuth>
                    }
                />
                <Route path="/delete"
                       element={
                           <RequireAuth>
                               <DeletePage />
                           </RequireAuth>
                       }
                />
                <Route path="*" element={<Page404/>} />
            </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
