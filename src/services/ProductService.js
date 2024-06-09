import axios from "axios";
import { getAccessToken } from "../utills";


export const createProduct = async(data) =>{
    const accessToken = getAccessToken();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_add`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}
export const getAllProduct = async() =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product_get`)
    return res.data
}
export const getDetailsProduct = async (data) => {
    const accessToken = getAccessToken();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_get_id`, data)
    return res.data
}
export const deleteProduct = async (data) => {
    const accessToken = getAccessToken();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_del`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

export const updateProduct = async (data) => {
    const accessToken = getAccessToken();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_update`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

export const getType= async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product_get_loai`, data)
    return res.data
}
export const searchProduct= async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/find`, data)
    return res.data
}