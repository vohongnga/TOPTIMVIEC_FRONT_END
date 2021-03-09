import React, { Component } from 'react';
import '../style.css';
class JOB_ITEM extends Component{
  render(){
      return (
        <div className="col-md-8">
                    <div className="job-item">
                        <div className="row">
                            <div className="col-md-2 logo">
                                <img src="https://res.cloudinary.com/pikann22/image/upload/w_60,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png"/>
                            </div>
                        
                            <div className="col-md-4 detail">
                            
                                <h3>
                                    Công việc 1
                                </h3>
                                <p>Đây là công việc 1</p>
                            </div>
                            <div className="col-md-2 city">
                                <div className="feature new text">
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
                        <div className="row">
                            <div className="col-md-2 logo">
                                <img src="https://res.cloudinary.com/pikann22/image/upload/w_60,c_scale/v1613642165/toptimviec/LogoMakr-87TXng_pnsj0a.png"/>
                            </div>
                            <div className="col-md-4 detail">
                                <h3>
                                    Công việc 1
                                </h3>
                                <p>Đây là công việc 1aaaaaaaaaaaaaaaaaaa</p>
                            </div>
                            <div className="col-md-2 city">
                                <div className="feature new text">
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
                    </div>
                </div>
      );
  }
}
export default JOB_ITEM;
