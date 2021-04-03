import React, { Component} from 'react';
import '../../style.css';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

class JobItem extends Component {
    
    render() {
        var {job} = this.props;
        console.log(job)
        return (
            <Link to={"/post/"+job._id}>
                <div className="item row full-width mx-1 mb-3 rounded bg-white border-0 big-hover" data-aos="fade-right">
                    <div className="col col-2 logo mx-3 ml-1 mt-1">
                        <img className="mx-auto" src={job.employer.avatar} alt="" />
                    </div>
                    <div className="col col-8 mt-2">
                        <h4 className="text-truncate">{job.title}</h4>
                        <div className="row border-0 mt-3">
                            <div className="detail ml-3">
                                <h5>Công ty TopTimViec</h5>
                                <button type="button" className="btn btn-light btn-sm mr-1">PHP</button>
                                <button type="button" className="btn btn-light btn-sm mr-1">Laravel</button>
                            </div>
                            <div className="ml-auto mr-4 city_and_posted_date">
                                <p><i className="fa fa-dollar-sign mr-1 mb-2"></i>Đăng nhập để xem</p><br/>
                                <div className="text-right">
                                    <p>Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
export default JobItem;
