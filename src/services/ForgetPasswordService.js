import axios from "axios"
import { API_URL } from "../constants/ApiUrl"

let ForgetPasswordService = {
    sendMailAPI : (email) => {
        return axios({
            method: "POST",
            url: API_URL + 'forget-password',
            data: {
                "email" : email,
            }
        });
    },
    resetPasswordAPI: (id_user,key,password) => {
        return axios({
            method: "POST",
            url: API_URL + 'reset-password-forget',
            data: {
                "id_user" : id_user,
                "key" : key,
                "password" : password,
            }
        })
    }
}
export default ForgetPasswordService;