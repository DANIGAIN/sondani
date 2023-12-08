import axios from "axios";
import { toast } from "react-toastify";

export const handleSubmit = async (blod, setblod, onHide, blods, setBlods) => {
    try {
        const res = await axios.post('/service', blod);
        if (res.data.error) {
            toast.error(res.data.error)
        } else {
            const updatedBlods = [...blods, blod];
            setBlods(updatedBlods)
            setblod({});
            onHide(false);
            toast.success('blod is added successfully  ....');
        }
    } catch (error) {
        toast.error(error)
    }

}

export const getBlods = async () => {
    try {
        const res = await axios.get('/service');
        return res.data;

    } catch (error) {
        toast.error(toast)
    }
}


export const handelDeleteBlod = async (id, blods, setBlods) => {
    try {

        const updatedBlods = blods.filter((data) => data._id != id);
        setBlods(updatedBlods);
        const res = await axios.delete(`/service/${id}`);
        if (!res.data.error) {
            toast.error("This blod services delete successfully")
        }

    } catch (error) {
        toast.error(error)
    }
}


//------------------------------------------  stripe payament mathod ----------------- //




export const stripepaymentApi = async (orders) => { 
    
    console.log(orders)
  
 }

export const submitOderHandeler = async (blod, setOrders, orders) => {

    setOrders((prev) => ({ ...prev, serviceId: blod._id }))
    setOrders((prev) => ({ ...prev, group: blod.group }))
    setOrders((prev) => ({ ...prev, quantity: (prev.quantity || 0) + 1 }))
    setOrders((prev) => ({ ...prev, total: (prev.total || 0) + parseInt(blod.price) }))
}