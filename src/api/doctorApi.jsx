import { toast } from "react-toastify";
import axios from "axios";

export const handleSubmit = async (doctorData ,onHide) => {
    try {
      const formdate = new FormData();
      formdate.append('image', doctorData.image);
      formdate.append('name', doctorData.name);
      formdate.append('specialist', doctorData.specialist);
      formdate.append('rating', doctorData.rating);
      formdate.append('email', doctorData.email);

      const response = await axios.post('/doctor', formdate, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        onHide();
        toast.success("Add a Doctor");

      }

    } catch (error) {
      toast.error(error.message);
    }

  }

export const handelDeleteDoctor = async (id , doctors,setDoctors) => {

    const res = await axios.delete(`/doctor/${id}`);
    if (res.data.error) {
        toast.error(res.data.error);
    } else {
        const newDoctorList = doctors.filter((doctor) => doctor.id != id);
        setDoctors(newDoctorList);
        toast.error("Deleted a doctor");
    }
}

export const getDoctors = async () => {
   const res = await axios.get('/doctor')
   if(res.data.error)
   {
       toast.error(res.data.error);
   }
    return res.data ;
}


export const getDoctorsById = async(id) =>{
    const res = await axios.get(`/doctor/find/${id}`);
    return res.data;
}