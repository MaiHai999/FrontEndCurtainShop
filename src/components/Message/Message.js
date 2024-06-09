import { message } from "antd"

const error =(mes = 'Success') =>{
    message.error(mes)
}
const warning =(mes = 'Error') =>{
    message.warning(mes)
}
const success =(mes = 'Warning') =>{
    message.success(mes)
}
export {success, error, warning}