import axios from 'axios'
import {API_URL} from './../constants/ApiUrl';

let EmployerService = {
    fetchEmployerAPI: (name,email, password, repassword) => {
        return axios({
            method: 'POST',
            url: API_URL+'employer',
            data: {
                "name" : name,
                "email": email, 
                "password": password,
                "repassword": repassword
            }
        });
    }
}

export default EmployerService