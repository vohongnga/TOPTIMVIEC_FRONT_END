import {API_URL} from './../constants/ApiUrl';
import axios from 'axios'
import callApi from './../utils/apiCaller';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
            cookies.remove("id_user", {path: "/"});
            cookies.remove("refresh_token", {path: "/"});
            cookies.remove("role", {path: "/"});
            cookies.remove("token", {path: "/"});

            window.location.href = "/dang-nhap";
        });
    }
}

export default LoginService