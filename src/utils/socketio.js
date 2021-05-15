import io from 'socket.io-client';

export default function socketConnector() {
    var token = sessionStorage.getItem("token");
    return io('http://toptimviec-backend.herokuapp.com', {extraHeaders: {Authorization: `Bearer ${token}`}});
}