import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Loading from "../pages/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Create a UserContext
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('/profile');
            setUser(res.data);

        };


        getUser();
    }, []);

    if (user === null) {
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
