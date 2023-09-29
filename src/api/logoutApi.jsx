import axios from "axios";
import { toast } from "react-toastify";
export const getLogout = async() =>{
    const res = await axios.get('/logout');
    if(res.data.error)
    {
        toast.error(res.data.error)
        return false ;
    }

    return true 
}