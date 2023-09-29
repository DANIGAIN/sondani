import axios from "axios";
import { toast } from "react-toastify";
export const getSpecialists = async () => {
    try {
        const res = await axios.get('/specialist');
        return res.data;
    } catch (error) {
        toast.error(error.message);
    }
}

export const handelDelete = async (id ,specialists ,setSpecialists) => { 

       const res =  await axios.delete(`/specialist/${id}`);
        const newList =   specialists.filter(specialist => specialist._id !== id)
        setSpecialists(newList);

        if(res.data.error)
            toast.error(res.data.error);
        else
           toast.success("Deleted a specialist")
   
}