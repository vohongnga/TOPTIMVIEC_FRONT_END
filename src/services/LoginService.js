import {API_URL} from './../constants/ApiUrl';
import axios from 'axios'
import callApi from './../utils/apiCaller';

let LoginService = {
    fetchLoginAPI: (email, password) => {
        return axios({
            method: 'POST',
            url: API_URL+'login',
            data: {
                "email": email, 
                "password": password
            }
        });
    },
    logoutAPI: () => {
        return callApi('logout', 'DELETE').then(res => {
            localStorage.removeItem("id_user");
            localStorage.removeItem("avatar");
            localStorage.removeItem("name");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("role");

            sessionStorage.removeItem("id_user");
            sessionStorage.removeItem("avatar");
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("refresh_token");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("token");

            window.location.href = "/dang-nhap";
        });
    }
}

export default LoginService