import axios from "axios";

export const getUser = async () => {
    const res = await axios.get('/users');
    return res.data ;
}

export const handelDeleteUser = async(id ,users ,setUsers) => {
    try{
       
       await axios.delete(`/user/${id}`);
       const  newUserList  =  users.filter(user => user.id !== id)
       setUsers(newUserList);
    }catch(error){
       toast.error(error.message);
    }
  }