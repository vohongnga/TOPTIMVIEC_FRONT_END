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