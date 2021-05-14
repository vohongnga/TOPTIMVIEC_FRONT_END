import callApi from "./../utils/apiCaller";

export const getMailSend = (page) => {
  return callApi("mail/send?page=" + page, "GET").then((res) => {
    return res.data.list_mail;
  });
};
