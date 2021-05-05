import { Component } from "react";
import { Link } from "react-router-dom";
import ReceiveMailService from "../../../services/ReceiveMailService";
import callApi from "../../../utils/apiCaller";
class ListMail extends Component{
    constructor(props){
        super(props);
        this.state = {
            receiveMailList : [],
        }
    }
    componentDidMount() {
        callApi();
         
            ReceiveMailService.fetchReceiveMailAPI().then((receiveMailList) => {
                this.setState({receiveMailList});
         
            });
        

            
               
            
    
           
        
                
    }
           
        
            
        
        
    
    render() {
        let {receiveMailList} = this.state;

        return(
            <div className="col-lg-8 col-md-6 content jumbotron center mt-3">
                    <ul className="list-group">
                        {receiveMailList.map(list => (
                            <li className="list-group-item">
                                <Link to="">{list.name}</Link>
                                <p className="text-right">22/02/2021</p>
                            </li>
                        ))}
                        
                        <li className="list-group-item"><Link to="">Hộp thư đã gửi</Link></li>  
                        <li className="list-group-item"><Link to="">Hộp thư đã gửi</Link></li>
                        <li className="list-group-item"><Link to="">Hộp thư đã gửi</Link></li>
                        <li className="list-group-item"><Link to="">Hộp thư đã gửi</Link></li>
                        <li className="list-group-item"><Link to="">Hộp thư đã gửi</Link></li>   
                    </ul>
                
            </div>
            
        )
    }
}
export default ListMail;