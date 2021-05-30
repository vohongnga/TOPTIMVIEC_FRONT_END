import axios from 'axios';
import {API_URL} from './../constants/ApiUrl';
import {refreshToken} from './../services/TokenService';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function callApi(endpoint, method = 'GET', body) {
    const token = cookies.get("token");
    if (token) {
        return axios({
            method: method,
            url: API_URL+endpoint,
            data: body,
            headers: { Authorization: `Bearer ${token}` }
        }).catch((e) => {
            if (e.response.status === 401) {
                return refreshToken().then(res => {
                    return callApi(endpoint, method, body);
                });
            }
            else if (e.response.status === 404) {
                window.location.href = "/khong-ton-tai";
            }
        });
    }
    else {
        return axios({
            method: method,
            url: API_URL+endpoint,
            data: body
        })
    }
}