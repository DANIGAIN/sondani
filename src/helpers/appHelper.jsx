import { toast } from "react-toastify";
import { getDoctorsById } from "../api/doctorApi";

export const  convertUtcToBst  =(utcTime)  =>{
    const utcDate = new Date(utcTime);

    const bstYear = utcDate.getUTCFullYear();
    const bstMonth = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const bstDay = utcDate.getUTCDate().toString().padStart(2, '0');
    const bstHours = utcDate.getUTCHours().toString().padStart(2, '0');

    const bstMinutes = utcDate.getUTCMinutes().toString().padStart(2, '0'); 
    const bstFormatted = `${bstYear}-${bstMonth}-${bstDay} ${bstHours}:${bstMinutes}`;
  
    return  bstFormatted ;
  }

 export const hendelDateTime = async (date ,setPatientData) => {
    const parsedDate = new Date(date);
    if(parsedDate.getHours() < 10 || parsedDate.getHours() >= 17 )
    {
       setPatientData((perv)=>({...perv, app_Time:''}))
       toast.error("sorry ! our clinic in close this time")
    }else 
    {
       setPatientData((perv)=>({...perv, app_Time:date}))
    }    
}

 export  const hendelchange = async (e, setPatientData , setDoctors) => {
    const id = e.target.value;
    setPatientData((perv)=>({...perv ,tropic:id}))
    try {
        getDoctorsById(id).then((res) =>setDoctors(res))
       
    } catch (err) {
        toast.error(err.message);
    }
}
