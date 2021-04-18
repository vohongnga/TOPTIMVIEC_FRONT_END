import callApi from './../utils/apiCaller';

export const newList = (name) => {
    return callApi('list-candidate', 'POST', {"name": name});
}
export const deleteList = (id) => {
    return callApi('list-candidate/'+id, 'DELETE');
}
export const updateList = (id, name) => {
    return callApi('list-candidate/'+id, 'PUT', {"name": name});
}
export const chooseCV = (id_list, id_cv) => {
    return callApi('list-candidate/'+id_list+'/add/'+id_cv, 'POST');
}
export const getList = (id_list) => {
    return callApi('list-candidate/'+id_list, 'GET');
}
export const deleteCV = (id_list, id_cv) => {
    return callApi('list-candidate/'+id_list+'/'+id_cv, 'DELETE');
}