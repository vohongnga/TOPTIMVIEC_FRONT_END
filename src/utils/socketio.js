import io from 'socket.io-client';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function socketConnector() {
    var token = cookies.get("refresh_token");
    return io('http://toptimviec-backend.herokuapp.com', {extraHeaders: {Authorization: `Bearer ${token}`}});
}