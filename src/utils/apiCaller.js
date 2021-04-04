import axios from 'axios'
import {API_URL} from './../constants/ApiUrl'

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: API_URL+endpoint,
        data: body
    });
}