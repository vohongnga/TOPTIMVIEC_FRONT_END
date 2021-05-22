
import callApi from './../utils/apiCaller';

export const getMail = (page) => {
    return callApi("mail?page="+page,'GET').then(res => {
        if(res.status === 200){
            return res.data.list_mail;
        }
       
    });
};

export const getMailById = (id_mail) => {
    return callApi("mail/"+id_mail,'GET').then(res => {
        if (res) {
            return res.data;
        }
    }) 
}

