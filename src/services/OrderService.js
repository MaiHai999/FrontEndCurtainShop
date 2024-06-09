
import axios from "axios";


export function GetAllOrder(){
    return axios.get(`${process.env.REACT_APP_API_URL}/api/orders`);
}


export function GetProductOrder(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/order_get_id`,data);
}

export const addOrder = async(data) =>{
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/orders`, data)
    return res.data
}

export function GetAllStatus(){
    return axios.get(`${process.env.REACT_APP_API_URL}/api/status`);
}


export function UpdateOrderStutus(idorder,data){
    return axios.put(`${process.env.REACT_APP_API_URL}/api/orders/${idorder}`,data);
}
