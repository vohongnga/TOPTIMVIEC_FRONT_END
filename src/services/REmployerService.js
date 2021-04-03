import axios from 'axios'
import ApiUrls from '../constants/ApiUrls';

let REmployerService = {
    fetchREmployerAPI: (body) => {
        return axios.post(ApiUrls.REMPLOYER_API, body)
                .then(res => {
                    if (res.status === 200) {
                        //console.log(res.data);
                        return res.data;
                    }
                    else {
                        
                    }
                })
                .catch(err => err);
    }
}

export default REmployerService