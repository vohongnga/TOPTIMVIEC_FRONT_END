import axios from 'axios'
import ApiUrls from '../constants/ApiUrls';

let LoginService = {
    fetchLoginAPI: (body) => {
        return axios.post(ApiUrls.LOGIN_API, body)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data);
                        return res.data;
                    }
                    else {
                        
                    }
                })
                .catch(err => err);
    }
}

export default LoginService