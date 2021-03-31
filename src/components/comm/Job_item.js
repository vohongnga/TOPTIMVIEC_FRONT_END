import React, { Component, useEffect } from 'react';
import '../../style.css';
import Aos from "aos";
import "aos/dist/aos.css";

class Job_item extends Component {
    constructor(props) {
        super(props);
        Aos.init({duration: 1000});
    }
    render() {
        return (
            <div className="row full-width mx-1 mb-3 rounded bg-white" data-aos="fade-right">
                <div className="logo my-1 mx-4 mt-3">
                    <img src="https://res.cloudinary.com/pikann22/image/upload/w_100,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png" />
                </div>

                <div className="detail ml-2 mt-2">
                    <h5>Công việc 1</h5>
                    <a href="#"><i className="fa fa-dollar-sign mr-1"></i>Đăng nhập để xem</a><br/>
                    <button type="button" className="btn btn-light btn-sm mr-1 mt-1">PHP</button>
                    <button type="button" className="btn btn-light btn-sm mr-1 mt-1">Laravel</button>
                </div>
                <div className="ml-auto mr-4 city_and_posted_date mt-2">
                    <div className="feature-text">
                        <p>NEW</p>
                    </div>
                    <div className="city">
                        <p>TP HCM</p>
                    </div>
                    <div className="distance-time-job-posted">
                        <p>1 ngày trước</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Job_item;
