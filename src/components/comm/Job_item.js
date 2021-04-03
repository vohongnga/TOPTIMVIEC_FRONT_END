import React, { Component, useEffect } from 'react';
import '../../style.css';
import "aos/dist/aos.css";

class Job_item extends Component {
    
    render() {
        return (
            <div className="item row full-width mx-1 mb-3 rounded bg-white border-0 big-hover" data-aos="fade-right">
                <div className="logo my-1 mx-4 mt-2">
                    <img src="https://res.cloudinary.com/pikann22/image/upload/w_150,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png" width="115px" height="115px" />
                </div>
                <div className="col mt-2">
                    <h4>Công việc 1</h4>
                    <div className="row border-0 mt-3">
                        <div className="detail ml-3">
                            <h5>Công ty TopTimViec</h5>
                            <button type="button" className="btn btn-light btn-sm mr-1">PHP</button>
                            <button type="button" className="btn btn-light btn-sm mr-1">Laravel</button>
                        </div>
                        <div className="ml-auto mr-4 city_and_posted_date">
                            <a href="/dang-nhap"><i className="fa fa-dollar-sign mr-1 mb-3"></i>Đăng nhập để xem</a><br/>
                            <div className="mt-2 text-right">
                                <p>Hồ Chí Minh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Job_item;
