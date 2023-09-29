import axios from "axios";
import { toast } from "react-toastify";

export  const loginApi = async (user) => {
    const { email, password } = user;
    try {

        const responce = await axios.post('/login', {
            email, password
        });

        if (responce.data.error) {
            toast.error(responce.data.error);
            return false;
        } else {
          
            toast.success("login successfully");
            return true ;
        }
    } catch (error) {
        toast.error(email.message);
       return false;
    }

}