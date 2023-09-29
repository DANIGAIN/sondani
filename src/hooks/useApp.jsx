import React,{useState} from "react";
export const useApp = () =>{
    const [appointments, setAppointments] = useState([]);
    return {appointments , setAppointments}
}