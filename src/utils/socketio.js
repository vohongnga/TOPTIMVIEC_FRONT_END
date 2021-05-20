import io from 'socket.io-client';

export default function socketConnector() {
    var token = sessionStorage.getItem("refresh_token");
    return io('http://toptimviec-backend.herokuapp.com', {extraHeaders: {Authorization: `Bearer ${token}`}});
}