import React ,{useState} from "react";
export const useDoctor = () =>{
    const [doctorData, setDoctorData] = useState({
        name: '',
        specialist: '',
        rating: '',
        image: '',
        email: ''
      });

    return {doctorData , setDoctorData};
}