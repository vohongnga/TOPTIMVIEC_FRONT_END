import axios from 'axios';
import {API_URL} from './../constants/ApiUrl';
import {refreshToken} from './../services/TokenService';

export default function callApi(endpoint, method = 'GET', body) {
    var token = sessionStorage.getItem("token");
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
    });
}