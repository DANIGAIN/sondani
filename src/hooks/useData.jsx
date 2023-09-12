
import { useState } from "react";

export const useData = () =>
{
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        isAdmin: false
      });
      return {data , setData};
}