import callApi from './../utils/apiCaller';

export const getAccountInfo= () => {
    return callApi('info', 'GET').then(res => {
        sessionStorage.setItem("id_user", res.data.id_user);
        sessionStorage.setItem("avatar", res.data.avatar);
        sessionStorage.setItem("name", res.data.name);
        sessionStorage.setItem("role", res.data.role);
    });
}