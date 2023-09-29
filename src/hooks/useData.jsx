
import { useState } from "react";

export const useData = () =>
{
    const [user, setUser] = useState({
        id:'',
        name: '',
        email: '',
        password: '',
        role: 10 , 
        IsLogin:true,
      });
      return {user , setUser};
}