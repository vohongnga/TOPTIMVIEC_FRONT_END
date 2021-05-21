import callApi from './../utils/apiCaller';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getAccountInfo= () => {
    return callApi('info', 'GET').then(res => {
        cookies.set("id_user", res.data.id_user);
        cookies.set("avatar", res.data.avatar);
        cookies.set("name", res.data.name);
        cookies.set("role", res.data.role);
    });
}