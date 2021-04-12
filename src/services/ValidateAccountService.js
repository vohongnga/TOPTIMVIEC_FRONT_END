import axios from 'axios'
import {API_URL} from './../constants/ApiUrl';

let ValidateAccountService = {
    fetchValidateAccountAPI: (id,key) => {
        return axios({
            method: 'PUT',
            url: API_URL+'validate',
            data: {
                "id" : id,
                "key": key
                
            }
        });
    }
}

export default ValidateAccountService