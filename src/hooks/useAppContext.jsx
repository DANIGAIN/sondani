import React , {useContext}  from "react";
import { AppContext } from "../App";

export const useAppContext = () =>{
    const {appointments, setAppointments} = useContext(AppContext); 
    return {appointments, setAppointments} 
}