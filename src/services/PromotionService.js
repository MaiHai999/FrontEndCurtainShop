import axios from "axios";
import { getAccessToken } from "../utills";


export const getPromotion = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/promotion_get`);
    return response.data;
}


export function GetProductPromotion(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_get_id`,data);
}


export function GetAllProduct(){
    return axios.get(`${process.env.REACT_APP_API_URL}/product_get`);
}


export function AddPromotion(data){
    const accessToken = getAccessToken();
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_add`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}


export function DeletePromotion(data){
    const accessToken = getAccessToken();
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_del`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}

export function UpdatePromotion(data){
    const accessToken = getAccessToken();
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_update`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}


