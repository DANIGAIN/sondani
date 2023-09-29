import { useState } from "react"
import { useUserConext } from "./useUserContext"
export const usePatient = ()=>{
    const {user} = useUserConext()
    const [patientData, setPatientData] = useState({
        patientId:user.id,
        name: '',
        age: '',
        address: '',
        email: '',
        phone: '',
        doctor: '',
        tropic:'',
        app_Time: '',
        status:0 
    })
    return {patientData , setPatientData}
}