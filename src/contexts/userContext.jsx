import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Create a UserContext
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const getUser = async() =>
    {
        if(!user) {
            await axios.get('/profile').then((data)=>setUser(data.data))
        }
    }

    useEffect(() => {
       getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
