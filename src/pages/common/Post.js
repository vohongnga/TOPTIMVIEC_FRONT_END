import React, { Component } from 'react';
import Advertisements from "../../components/common/Advertisements";
import {connect} from 'react-redux';
//import CandidateList from "../../components/employer/index/CandidateList";
import JobList from "../../components/common/JobList";
import '../../style.css';

import * as services from './../../services/ListService';

class Post extends Component{

    
    constructor(props) {
        super(props);
        this.state={
            "post": {
                "address": "95A1 Trần Quốc Toản. Phường 7. Quận 3",
                "benefit": "- Lương tháng 13.\n- Đánh giá performance định kỳ (2 lần /năm).\n- Du lịch công ty hàng năm.\n- Khám sức khỏe định kỳ hằng năm.\n- Nâng cao tiếng Nhật với lớp tiếng Nhật buổi tối 1 tuần / 2 buổi.\n- Hổ trợ ăn trưa giá trị tương đương 500.000 VND.\n- Thường xuyên có các hoạt động team: sinh nhật, tiệc gà quay, tiệc pizza,…\n- Các hoạt động thể thao: đá banh, v.v\n- Được tham gia đầy đủ các chế độ bảo hiểm theo quy định luật lao động Việt Nam.",
                "deadline": "Mon, 22 Mar 2021 00:00:00 GMT",
                "description": "- Phát triển Web Application\n* Cách làm việc trong nhóm\n- Nhân viên mới sẽ bắt đầu với vị trí là Developer và sẽ được phân bổ công việc theo kỹ năng, mong muốn và mục tiêu của từng nhân viên.\n- Đây là môi trường phát triển đối với Developer có định hướng trở thành Expert hoặc có định hướng học hỏi kỹ năng Management để trở thành Leader.\n- Đồng thời giữa Developer và Tester không có sự riêng biệt mà chính mỗi thành viên sẽ tiến hành công việc với ý thức tạo ra 1 sản phẩm chất lượng tốt.\n* Cách tiến hành công việc sau khi vào công ty:\n- Hai tháng đầu sau khi vào làm sẽ là thời gian để nhân viên nghiên cứu về cách tiến hành công việc và tìm hiểu nội dung của Package.\n- Chúng tôi sẽ hướng dẫn và tập huấn cho nhân viên về ý thức chất lượng, team work cần thiết cho công việc nhóm.\n- Sau khi thời gian nghiên cứu kết thúc, chúng tôi sẽ phân bổ nhân viên vào các nhóm phù hợp.",
                "employer": {
                  "_id": "601bc2ddfa18573f7802e292",
                  "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612432069/toptimviec/crczb76skyrebtjdx9so.jpg",
                  "name": "CÔNG TY TNHH W2SOLUTION VIỆT NAM"
                },
                "hashtag": [
                  "ASP.NET",
                  "C#",
                  ".NET",
                  "SQL",
                  "Tester"
                ],
                "place": [
                  "Hồ Chí Minh"
                ],
                "request": "- Nếu ứng tuyển là nhân viên chính thức thì cần có kinh nghiệm lập trình tối thiểu 1 năm (Bắt buộc) đối với: C#, ASP.NET, SQL Server, Xml, etc\n- Nếu ứng tuyển là thực tập sinh thì không cần có kinh nghiệm (vừa mới tốt nghiệp) sẽ được huấn luyện 2 tháng trước khi thử việc chính thức.\n- Ưu tiên ứng viên có kinh nghiệm Coding standands.\n- Ưu tiên ứng viên có kinh nghiệm Design Pattern.\n- Ưu tiên ứng viên có kinh nghiệm làm E-Commerce.\n- Ưu tiên ứng viên biết tiếng Nhật.",
                "salary": "Thoả thuận",
                "title": "LẬP TRÌNH VIÊN .NET DEVELOPER ( C#, ASP.NET )"
              }

        }
        
    }
   componentDidMount(){
       var match= this.props.match;
       console.log(match);
       if(match){
           var id = match.params.id;
           services.getPost(id).then((res)=>{
               const recommend = res.data.recommend;
               this.setState({post:res.data.post});
               console.log(this.state.post.recommend)
           });
       }
   }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        let hashtags = this.state.post.hashtag;
        let benefitList = this.state.post.benefit.split("\n");
        let descriptionList = this.state.post.description.split("\n");
        let requestLít = this.state.post.request.split("\n");
        return (
           
            <div className="col-10 mx-auto ">
                <div className ="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 ">
                        <div className="bg-white rounded mt-4 p-3">
                            <h1 className="mb-5 h1">{this.state.post.title}</h1>
                            <button type="button" className="btn btn-success btn-lg btn-block">Apply now</button>
                            <div className="infor border-top-bottom mt-4">
                                <div className = "hashtag mb-3 mt-3">   
                                    {hashtags.map(hashtag => ( <button type="button" className="btn btn-light btn-sm mr-1 mt-1" onClick={(e) =>this.onClickHashtag(e, hashtag)}>{hashtag}</button>))}
                                </div>
                                <p className="mb-3"><i className="fa fa-dollar-sign mr-2"></i>Lương: {this.state.post.salary}</p>
                                <p className="mb-3"><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Địa điểm: {this.state.post.address}</p>
                                <p className="mb-3"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>Đến hạn: {this.state.post.deadline}</p>
                            </div> 
                            <div class ="benefit mt-5 border-top pt-4">
                                <h2 className = "mb-3 h2">Quyền lợi</h2>
                                {benefitList.map(benefit=>{return <p className="mb-2 p">{benefit}</p>})}
                            </div>
                            <div className = "description mt-5 border-top pt-4">
                                <h2 className = "mb-3 h2 " >Mô tả công việc</h2>
                                    {descriptionList.map(description=>{return <p className="mb-2 p">{description}</p>})}
                            </div>
                            <div className="request mt-5 border-top pt-4">
                                <h2 className="mb-3 h2">Yêu cầu công việc</h2>
                                {requestLít.map(request=>{return <p className="mb-2 p">{request}</p>})}
                            </div>  
                            
                        </div>   
                         
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 center-text">
                        <div className=" bg-white rounded mt-4 pb-4 mt-2">
                            <img src={this.state.post.employer.avatar} style={{'max-width':'50%'}} className="mt-2"/>
                            <h4 className = "h6 mt-2 mb-4" >{this.state.post.employer.name}</h4>
                            <button type="button" class="btn btn-success">Liên hệ</button>
                        </div>
                        
                    </div>
               </div>
               <h2 className = "mb-2 h4 mt-5" >Công việc liên quan</h2>
               <div className = "row">
               
                    <JobList jobs={this.state.post.recommend}/>
               </div>
              
            </div>
            
        );
    }
}
export default Post;