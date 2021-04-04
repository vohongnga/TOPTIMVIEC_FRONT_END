import React, { Component} from 'react';
import '../../style.css';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

class JobItem extends Component {
    
    render() {
        var {job} = this.props;
        var place = "";
        if (job.place.length>0) {
            job.place.forEach((element, i) => {
                if (i===0) {
                    place=element;
                } else {
                    place += ", "+element;
                }
            });
        }
        return (
            <Link to={"/post/"+job._id}>
                <div className="item row full-width mx-1 mb-3 rounded bg-white border-0 big-hover p-3" data-aos="fade-right">
                    <div className="col col-2 logo">
                        <img className="mx-auto" src={job.employer.avatar} alt="" />
                    </div>
                    <div className="col col-10">
                        <h4 className="text-truncate">{job.title}</h4>
                        <div className="row border-0 mt-3">
                            <div className="col-8 detail">
                                <h5 className="text-truncate">{job.employer.name}</h5>
                                {this.showHashtag(job.hashtag)}
                            </div>
                            <div className="col-4 ml-auto city_and_posted_date">
                                <p className="text-truncate text-right"><i className="fa fa-dollar-sign mr-1 mb-2"></i>Đăng nhập để xem</p><br/>
                                <div className="text-right">
                                    <p className="text-truncate">{place}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
    showHashtag = (listHashtag) => {
        var result = null;
        if (listHashtag.length > 0) {
            result = listHashtag.map((hashtag, index) => {
                return (
                    <button key={index} type="button" className="btn btn-light btn-sm mr-1">{hashtag}</button>
                )
            })
        }
        return result;
    }
}
export default JobItem;
