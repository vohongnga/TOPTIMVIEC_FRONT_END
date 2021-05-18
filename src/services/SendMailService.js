import callApi from "./../utils/apiCaller";

export const sendMail = (receiver,title,content,attach_post, attach_cv) => {
    return callApi("mail" , 'POST',{"receiver": receiver,"title":title,"content": content,"attach_post":attach_post,"attach_cv":attach_cv});
};
