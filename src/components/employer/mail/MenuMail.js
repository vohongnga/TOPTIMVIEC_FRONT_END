import { Component } from "react";
import { Link } from "react-router-dom";

class MenuMail extends Component{
    render(){
        return(
            <div className="col-lg-4 col-md-6 content jumbotron center mt-3">
               
                    <ul className="list-group">
                        <li className="list-group-item text-center"><Link to="">Hộp thư đến</Link></li>
                        <li className="list-group-item text-center"><Link to="">Hộp thư đã gửi</Link></li> 
                    </ul>  
                
            </div>
        );
    }
}
export default MenuMail;