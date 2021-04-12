import axios from 'axios'
import {API_URL} from './../constants/ApiUrl';

let ApplicantService = {
    fetchApplicantAPI: (name,email,gender,dob, password) => {
        return axios({
            method: 'POST',
            url: API_URL+'applicant',
            data: {
                "name" : name,
                "email": email, 
                "gender": gender,
                "dob": dob,
                "password": password
            }
        });
    }
}

export default ApplicantService