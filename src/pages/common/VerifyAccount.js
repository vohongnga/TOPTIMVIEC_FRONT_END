import { Component } from "react";
import verifyaccount from '../../image/verifyaccount.png'
class VerifyAccount extends Component {
    render() {
        document.body.style.backgroundColor = "#eceff1";
        return (
            <div className="col col-lg-5 col-md-8 mt-4 bg-white jumbotron mx-auto mt30">
                 <img src={verifyaccount} className="mt-sm-md-3 verify center mt-3" alt=""></img> <br/>
                 <h1 className="ct mb-3 mt-4">Vui lòng xác nhận email !</h1>
            </div>
        )

    }
}
export default VerifyAccount;