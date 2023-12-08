import axios from "axios";
import { toast } from 'react-toastify';

export const handelSubmit = async (onHide, patientData ,req ,id ,setAppointments ,user) => {
    try {

        let res ;
        if(req == 'edit'){
            console.log(patientData)
             res = await axios.put(`/appointment/${id}`,patientData);
        }else 
        {
             res = await axios.post('/appointment', patientData);
        }
    
        if (res.data.error) {
            res.data.error.map(er => {
                toast.error(er);
            })
        }
        else {
            onHide();
            toast.success(`Appertment is ${req}`);
            getAppointment(user.id).then((res) => {
                setAppointments(res.data);
            })
        }

    } catch (error) {

        toast.error(error.message)
    }
}

export const handelDelete = async (id, appointments, setAppointments) => {
    const newList = appointments.filter((appointment) => appointment._id != id);
    setAppointments(newList);
    const res = await axios.delete(`/appointment/${id}`);
    if (res.data.error) {
        toast.error(res.date.error);
    } else {
        toast.success('appointment is cancel')
    }
}


export const handelStatue = async(status, id ,setAppointments ,appointments) =>{

 
     const newList = appointments.map((appointment) => {
        if (appointment._id === id) {
          appointment.status = status; 
        }
        return appointment; 
      });
     setAppointments(newList);
    
    const obj = {status:status};
    const  res = await axios.put(`/appointment/status/${id}`,obj);
    if(res.data.error)
    {
        toast.error(res.data.message);
    }
}

export const getAppointment = async (id) => {
    //patient id
    const res = await axios.get(`/appointment/find/${id}`)
    if (res.data.error) {
        toast.error(res.data.error)
    }
    return res;
}

export const getAppointmentbyId = async(id) => {
    //app id /appointment/:id
    const res = await axios.get(`/appointment/${id}`)
    if (res.data.error) {
        toast.error(res.data.error)
    }
    return res;
}

export const getAllAppointment = async() =>{
    const res = await axios.get('/appointment');
    if(res.data.error){
        toast.error(res.data.error)
    }
    return res;
}

export const countStatue = async(status) =>{
    const res = await axios.get(`/appointment/count/${status}`);
    if(res.data.error){
        toast.error(res.data.error)
    }
    return res;
}