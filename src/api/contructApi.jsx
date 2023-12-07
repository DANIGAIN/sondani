import axios from "axios";
import { toast } from "react-toastify"

export const handelSubmit =  async(question ,setquestion) =>{
    try{
        const res =  await axios.post('/contact',question)
        if(res.data.error){
            toast.error("error")
        }else{
            
            toast("successfully send A question ...")
            return 1 ;
        }

    }catch(error) {
        toast.error(error.message);
    }

}

export const getContructs = async() =>{
    try{
         const res = await axios.get('/contact');
         if(res.data.error)toast.error(res.data.error)
         else
           return res.data;
    }catch(error){
        toast.error(error)
    }
}

export const handelDelete = async(id ,questions , setquestion) =>{
    try{ 

        const updateQus = questions.filter((question)=> question._id != id);
        setquestion(updateQus);
        const res = await axios.delete(`/contact/${id}`);
        if(res.data.error) {
            toast.error(res.data.error);
        }else{
            toast("user question delete  successfully  ...")
        }  
    }catch(error){
        toast.error(error)
    }
}