import callApi from "../utils/apiCaller"

export const getInfo = () => {
    return callApi('general-info','GET');
}