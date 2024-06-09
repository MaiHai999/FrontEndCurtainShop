import axios from "axios"

export const loginAdmin = async(data) =>{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/login`)
    return res.data
}
export const statistic= async (year) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/report/${year}`)
    return res.data
}