import axios from "axios";
export const getProfileApi = async (setUser) => {
    const res = await axios.get('/profile');
       if(!res.data) setUser((perv)=>({...perv , IsLogin:false}))
    else 
        {
           const {id , name , email , role } = res.data ;
           setUser((prev)=>({...prev , id ,name ,email ,role}));
      }
};