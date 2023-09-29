import  {useState} from "react";
 export const useModal = () =>{
    const{modalShow ,setModalShow} = useState(false);
    return {modalShow , setModalShow}
 }