import React , {useContext} from "react";
import { UserContext } from "../contexts/userContext";

export const useUserConext = () =>{
    const { user, setUser } = useContext(UserContext);
    return {user , setUser};
}