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
            cookies.remove("id_user");
            cookies.remove("refresh_token");
            cookies.remove("role");
            cookies.remove("token");
            window.location.href = "/dang-nhap";
        });
    } else {
        cookies.remove("id_user");
        cookies.remove("refresh_token");
        cookies.remove("role");
        cookies.remove("token");

        window.location.href = "/dang-nhap";
    }
};