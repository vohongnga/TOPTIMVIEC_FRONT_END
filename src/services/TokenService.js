import axios from 'axios';
import {API_URL} from './../constants/ApiUrl'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const refreshToken = () => {
    const key = cookies.get("refresh_token");
    if (key) {
        return axios({
            method: "GET",
            url: API_URL+"token",
            headers: { Authorization: `Bearer ${key}` }
        }).then((res) => {
            cookies.set("token", res.data.token, {path: "/"});
        }).catch((e) => {
            cookies.remove("id_user", {path: "/"});
            cookies.remove("refresh_token", {path: "/"});
            cookies.remove("role", {path: "/"});
            cookies.remove("token", {path: "/"});
            window.location.href = "/dang-nhap";
        });
    } else {
        cookies.remove("id_user", {path: "/"});
        cookies.remove("refresh_token", {path: "/"});
        cookies.remove("role", {path: "/"});
        cookies.remove("token", {path: "/"});

        window.location.href = "/dang-nhap";
    }
};