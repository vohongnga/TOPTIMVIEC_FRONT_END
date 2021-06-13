import React, { Component } from 'react';
import { Link } from "react-router-dom";
class ListSampleCV extends Component{
    render(){
        document.body.style.backgroundColor = "#394141";
        
        return (
            <div>
                <h2 className="h2 text-center my-5 pb-5 text-white">Danh sách các mẫu CV</h2>
                <div className="col col-9 mx-auto mt-5">
                    <div className="col-lg-4 col-md-6 w-100">
                        <Link to="/them-cv" className="link">
                            <div className="card h-100 company-card px-4 pt-4 pb-2">
                                <div>
                                    <img className="center" src="https://res.cloudinary.com/pikann22/image/upload/w_200/v1621338790/toptimviec/MauCV1_l9mhbg.png" alt="" height="300px"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="h4 card-title mt-4">Mẫu 1</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListSampleCV;