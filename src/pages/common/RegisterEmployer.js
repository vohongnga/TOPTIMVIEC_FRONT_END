import React, { Component } from "react";
import EmployerService from '../../services/EmployerService';
import loading_gif from "../../image/loader.gif";
import { withRouter } from "react-router";

class RegisterEmployer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            name: "",
            email: "",
            password: "",
            repassword: "",
            notif: {
                password: false,
                name: false,
                email: false,
                repassword: false,
                validate: false,
            },
            notifmess: "",
            loading: false
            
        }
    }

    onHandleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }
    
    onBlurRePassword = () => {

        const { password, repassword } = this.state;
        if (password !== repassword) {
            const notif = this.state.notif;
            notif.repassword = true;
            this.setState({ notif });
        } else {
            const notif = this.state.notif;
            notif.repassword = false;
            this.setState({ notif });
        }

    }
    onBlurPassword = () => {
        const { password } = this.state;
        if (!password) {
            const notif = this.state.notif;
            notif.password = true;
            this.setState({ notif });
        } else {
            const notif = this.state.notif;
            notif.password = false;
            this.setState({ notif });
        }
        this.onBlurRePassword();
    }
    onBlurEmail = () => {
        const { email } = this.state;
        if (!email) {
            const notif = this.state.notif;
            notif.email = true;
            notif.validate = false;
            this.setState({ notif });

        }else if(!this.validateEmail()){
            const notif = this.state.notif;
            notif.validate = true;
            notif.email = false;
            this.setState({ notif });
        } else {
            const notif = this.state.notif;
            notif.email = false;
            notif.validate = false;
            this.setState({ notif });
        }
    }
    onBlurName = () => {
        const { name } = this.state;
        if (!name) {
            const notif = this.state.notif;
            notif.name = true;
            this.setState({ notif });

        } else {
            const notif = this.state.notif;
            notif.name = false;
            this.setState({ notif });
        }
    }
    validateEmail = () => {
        const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.test(this.state.email)
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const {name,email,password,repassword} = this.state;
            if(password === repassword && name && email && password && this.validateEmail()){
                EmployerService.fetchEmployerAPI(name,email,password).then(res => {
                    this.setState({ loading: false });
                    if(res.status === 201){
                        this.props.history.push("/dang-ky/xac-nhan");
                    }
                
                }).catch(err => {
                    this.setState({ loading: false });
                    if (err.response.status === 400) {
                        this.setState({notifmess: "(*) Vui l??ng nh???p ?????y ????? th??ng tin"});
                    } else if (err.response.status === 403) {
                        this.setState({notifmess: "(*) ????ng k?? kh??ng th??nh c??ng.Vui l??ng th??? l???i!"});
                    } else if (err.response.status === 409) {
                        this.setState({notifmess: "(*) Email ???? t???n t???i"});
                    }
                })
            }else if(!name && !email && !password){
                this.setState({ loading: false });
                const notif = this.state.notif;
                notif.password = true;
                notif.email = true;
                notif.name = true;
                this.setState({ notif });
            }else if(password !== repassword){
                this.setState({ loading: false });
                const notif = this.state.notif;
                notif.repassword = true;
                this.setState({ notif });
            }else if(!name){
                this.setState({ loading: false });
                const notif = this.state.notif;
                notif.name = true;
                this.setState({ notif });
            }else if(!email){
                this.setState({ loading: false });
                const notif = this.state.notif;
                notif.email = true;
                this.setState({ notif });
            }else if(!password){
                this.setState({ loading: false });
                const notif = this.state.notif;
                notif.password = true;
                this.setState({ notif });
            }else if(!this.validateEmail()){
                this.setState({ loading: false });
                const notif = this.state.notif;
                notif.validate = true;
                this.setState({ notif });
            }
            
        
    }
    
    render() {
        document.body.style.backgroundColor = "#394141";
        return (
            <div className="col-lg-4 col-md-6 content jumbotron center mt-3">
                <h1 className="center h1">????ng k?? t??i kho???n</h1>
                <form >
                    <div className="info">
                        <label>T??n c??ng ty (*):</label>
                        <input type="text" name="name"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurName}/>
                        
                    </div>
                    {this.state.notif.name === true ? <p className="text-danger mt-1">(*) T??n c??ng ty kh??ng ???????c ????? tr???ng !</p> : ""}
                    <div className="info">
                        <label >E-mail (*):</label>
                        <input type="text" name="email"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurEmail}/>
                        
                    </div>
                    {this.state.notif.email === true ? <p className="text-danger mt-1">(*) Email kh??ng ???????c ????? tr???ng!</p> : ""}
                    {this.state.notif.validate === true ? <p className="text-danger mt-1">(*) Email kh??ng ????ng ?????nh d???ng!</p> : ""}
                    <div className="info">
                        <label >M???t kh???u (*):</label>
                        <input type="password" name="password"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurPassword} />
                        
                    </div>
                    {this.state.notif.password === true ? <p className="text-danger mt-1">(*) M???t kh???u kh??ng ???????c ????? tr???ng!</p> : ""}
                    <div className="info">
                        <label >X??c nh???n l???i m???t kh???u (*):</label>
                        <input type="password" name="repassword"  className="form-control" placeholder="" onChange={this.onHandleChange} onBlur={this.onBlurRePassword}/>
                        
                    </div>
                    {this.state.notif.repassword === true ? <p className="text-danger mt-1">(*) M???t kh???u kh??ng tr??ng kh???p !</p> : ""}
                    {this.state.notifmess.length > 0 ? <p className="text-danger mt-1">{this.state.notifmess}</p> : ""}
                    {this.state.loading ? 
                        <div className="right-w3l">
                            <button type="button" className="btn btn-success center mt30" disabled>????ng k??</button>
                            <img className="center" src={loading_gif} alt="" width="50px"></img>
                        </div>
                    : 
                        <div className="right-w3l">
                            <button type="button" className="btn btn-success center mt30" onClick={this.onSubmit}>????ng k??</button>
                        </div>
                    }
                    
               </form>
               
           </div>
        );

    }
}
export default withRouter(RegisterEmployer);