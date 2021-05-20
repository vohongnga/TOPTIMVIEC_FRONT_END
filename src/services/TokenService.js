import axios from 'axios';
import {API_URL} from './../constants/ApiUrl'

export const refreshToken = () => {
    var key = sessionStorage.getItem("refresh_token");
    if (key) {
        return axios({
            method: "GET",
            url: API_URL+"token",
            headers: { Authorization: `Bearer ${key}` }
        }).then((res) => {
            sessionStorage.setItem("token", res.data.token);
        }).catch((e) => {
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
    } else {
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
    }
};