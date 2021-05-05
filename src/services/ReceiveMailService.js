import axios from "axios";
import ApiUrls from "../constants/ApiUrls";

let ReceiveMailService = {
    fetchReceiveMailAPI : () => {
        return axios.get(ApiUrls.RECEIVE_MAIL_API).then(res =>{
    
                return res.data.list_mail;
            
        }).catch(err => err)
    }
}
export default ReceiveMailService;