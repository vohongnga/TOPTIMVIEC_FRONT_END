import axios from 'axios'
import ApiUrls from '../constants/ApiUrls';

let TestService = {
    fetchTestAPI: () => {
        return axios.get(ApiUrls.TEST_API)
                .then(res => {
                    if (res.status === 200) {
                        return res.data.list_hashtag;
                    }
                    else {
                        
                    }
                })
                .catch(err => err);
    }
}

export default TestService