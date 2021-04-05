import callApi from './../utils/apiCaller';

let LoginService = {
    fetchLoginAPI: (email, password) => {
        return callApi('login', 'POST', {
            "email": email, 
            "password": password
        })
    }
}

export default LoginService