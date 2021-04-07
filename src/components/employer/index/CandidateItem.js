import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CandidateItem extends Component{
  render(){
      return (
        <div className="row">
                    <div className="col-2 col-md-2 col-sm-2 col-xl-2 col-lg-2 logo">
                        <img src="https://res.cloudinary.com/pikann22/image/upload/w_60,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png" alt=""/>
                    </div>
                
                    <div className="col-8 col-md-8 col-sm-8 col-xl-8 col-lg-8 detail">
                    
                        <h1>
                            Công việc 1
                        </h1>
                        <Link to=""><i class="fa fa-dollar-sign"></i>Đăng nhập để xem</Link>
                        <p><i class="fa fa-hashtag" aria-hidden="true"></i>PHP,LARAVEL</p>
                    </div>
                    <div className="col-2 col-md-2 col-sm-2 col-xl-2 col-lg-2 city_and_posted_date">
                        <Link to="" name="" id="" class="btn btn-primary" role="button" data-toggle="modal" data-target="#myModal">Chọn</Link>
                    </div>
                </div>
      );
  }
}
export default CandidateItem;
