import React, { createContext, useEffect } from "react";
import Loading from "../pages/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useData } from "../hooks/useData";
import { getProfileApi } from "../api/getProfileApi";

export const UserContext = createContext({});
export function UserContextProvider({ children }) {
    const {user, setUser} = useData();
    useEffect(() => {
         getProfileApi(setUser);
    },[]);
    if (user.email === '' && user.IsLogin) {
        return <Loading />
    }
    return (
        <div>
         
            <UserContext.Provider value={{ user, setUser }}>
                {children}
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
            </UserContext.Provider>
        </div>
    );
}

export default UserContextProvider;
