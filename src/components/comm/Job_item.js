import React, { Component } from 'react';
import '../../style.css';
class Job_item extends Component {
    render() {
        return (
            <div className="row rounded border-left-0 border-right-0 border-top-0">
                <div className="col-md-2 logo">
                    <img src="https://res.cloudinary.com/pikann22/image/upload/w_100,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png" />
                </div>

                <div className="col-md-8 detail">
                    <h5>Công việc 1</h5>
                    <a href="#"><i className="fa fa-dollar-sign mr-1"></i>Đăng nhập để xem</a><br/>
                    <button type="button" className="btn btn-light btn-sm mr-1">PHP</button>
                    <button type="button" className="btn btn-light btn-sm mr-1">Laravel</button>
                </div>
                <div className="col-md-2 city_and_posted_date">
                    <div className="feature-text">
                        <p>NEW</p>
                    </div>
                    <div className="city">
                        <p>TP HCM</p>
                    </div>
                    <div className="distance-time-job-posted">
                        <p>1 ngày trc</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Job_item;
