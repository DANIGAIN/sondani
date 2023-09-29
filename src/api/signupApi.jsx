import { toast } from "react-toastify";
import axios from "axios";

export const signupApi  = async(user) =>
{
    const {name ,email ,password ,role} = user;
   try{
         const response = await axios.post('/signup', {
            name, email, password, role
        });

        if(response.data.error){
            toast.error(response.data.error)
            return false;
        } 
        else {
               toast.success("signup  successfull")
               return true ;
        }
        
   }catch(error)
   {
       toast.error(error.message);
       return false ;
   }
} 
