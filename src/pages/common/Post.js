import React, { Component } from 'react';
import Aos from "aos";
import JobItem from '../../components/common/JobItem';
import '../../style.css';

import * as services from './../../services/ListService';

class Post extends Component{

    constructor(props) {
        super(props);
        this.state={
            "post": {
                "_id": "601c3c8936b6338524f9f57b",
                "address": "95A1 Trần Quốc Toản. Phường 7. Quận 3",
                "benefit": "- Lương tháng 13.\n- Đánh giá performance định kỳ (2 lần /năm).\n- Du lịch công ty hàng năm.\n- Khám sức khỏe định kỳ hằng năm.\n- Nâng cao tiếng Nhật với lớp tiếng Nhật buổi tối 1 tuần / 2 buổi.\n- Hổ trợ ăn trưa giá trị tương đương 500.000 VND.\n- Thường xuyên có các hoạt động team: sinh nhật, tiệc gà quay, tiệc pizza,…\n- Các hoạt động thể thao: đá banh, v.v\n- Được tham gia đầy đủ các chế độ bảo hiểm theo quy định luật lao động Việt Nam.",
                "deadline": "Sat, 01 Jan 2022 15:06:38 GMT",
                "description": "- Phát triển Web Application\n* Cách làm việc trong nhóm\n- Nhân viên mới sẽ bắt đầu với vị trí là Developer và sẽ được phân bổ công việc theo kỹ năng, mong muốn và mục tiêu của từng nhân viên.\n- Đây là môi trường phát triển đối với Developer có định hướng trở thành Expert hoặc có định hướng học hỏi kỹ năng Management để trở thành Leader.\n- Đồng thời giữa Developer và Tester không có sự riêng biệt mà chính mỗi thành viên sẽ tiến hành công việc với ý thức tạo ra 1 sản phẩm chất lượng tốt.\n* Cách tiến hành công việc sau khi vào công ty:\n- Hai tháng đầu sau khi vào làm sẽ là thời gian để nhân viên nghiên cứu về cách tiến hành công việc và tìm hiểu nội dung của Package.\n- Chúng tôi sẽ hướng dẫn và tập huấn cho nhân viên về ý thức chất lượng, team work cần thiết cho công việc nhóm.\n- Sau khi thời gian nghiên cứu kết thúc, chúng tôi sẽ phân bổ nhân viên vào các nhóm phù hợp.",
                "employer": {
                    "_id": "601bc2ddfa18573f7802e292",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612432069/toptimviec/crczb76skyrebtjdx9so.jpg",
                    "bio": "Công ty w2Solution Nhật Bản kinh doanh và phát triển web thương mại điện tử (sau đây gọi là Package, EC site). Package của chúng tôi được các công ty hàng đầu như Microsoft, Rakuten, Amuse sử dụng và được các công ty này đánh giá là package hàng đầu ...",
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
                "recommend": [
                    {
                        "_id": "601c3c8936b6338524f9f57b",
                        "count_hashtag": 5,
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
                        "salary": "Thoả thuận",
                        "title": "LẬP TRÌNH VIÊN .NET DEVELOPER ( C#, ASP.NET )"
                    },
                    {
                        "_id": "601c3c8736b6338524f9f579",
                        "count_hashtag": 4,
                        "employer": {
                            "_id": "601bc2ddfa18573f7802e292",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612432069/toptimviec/crczb76skyrebtjdx9so.jpg",
                            "name": "CÔNG TY TNHH W2SOLUTION VIỆT NAM"
                        },
                        "hashtag": [
                            "ASP.NET",
                            "C#",
                            ".NET",
                            "SQL"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": "THỰC TẬP SINH NET DEVELOPER(C#, ASP.NET)"
                    },
                    {
                        "_id": "601c3c2136b6338524f9f513",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bcc96fa18573f7802ea56",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434558/toptimviec/lxvzl0gvtmrscvwecut0.png",
                            "name": "CÔNG TY CỔ PHẦN BÓNG ĐÈN ĐIỆN QUANG"
                        },
                        "hashtag": [
                            "ASP.NET",
                            ".NET",
                            "SQL",
                            "C#",
                            "CSS"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": "SOFTWARE DEVELOPER - FULLSTACK"
                    },
                    {
                        "_id": "601c3a8d36b6338524f9f393",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bca16fa18573f7802e84d",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612433919/toptimviec/mcpc6tjopj79r61hedkg.jpg",
                            "name": "CÔNG TY CỔ PHẦN CƠ ĐIỆN LẠNH ĐẠI VIỆT"
                        },
                        "hashtag": [
                            "ASP.NET",
                            ".NET",
                            "C#",
                            "SQL",
                            "Angular"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "20-40 triệu",
                        "title": "NET DEVELOPER"
                    },
                    {
                        "_id": "601c39ed36b6338524f9f2fd",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bb30dfa18573f7802d95e",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612428022/toptimviec/l0ax61yyjxseen8qx7tc.png",
                            "name": "KYANON DIGITAL"
                        },
                        "hashtag": [
                            ".NET",
                            "ASP.NET",
                            "C#",
                            "English",
                            "SQL"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Trên 2 triệu",
                        "title": "SOFTWARE ENGINEER (.NET) - INTERN"
                    },
                    {
                        "_id": "601c36fb36b6338524f9f041",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bb132fa18573f7802d819",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612427546/toptimviec/ic9dayo2rg12dxknqih1.jpg",
                            "name": "CTY CỔ PHẦN RIKKEISOFT - CN HỒ CHÍ MINH"
                        },
                        "hashtag": [
                            ".NET",
                            "SQL",
                            "ASP.NET",
                            "C#",
                            "CSS"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Tới 35 triệu",
                        "title": "LẬP TRÌNH VIÊN .NET - HỒ CHÍ MINH"
                    },
                    {
                        "_id": "601bf821f0a78a1846da6590",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bb1fbfa18573f7802d8a7",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612427747/toptimviec/hpdognypzbkkje9fbxjb.png",
                            "name": "CÔNG TY CỔ PHẦN RIKKEISOFT"
                        },
                        "hashtag": [
                            ".NET",
                            "SQL",
                            "ASP.NET",
                            "C#",
                            "CSS"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Tới 35 triệu",
                        "title": "LẬP TRÌNH VIÊN .NET (HỒ CHÍ MINH)"
                    },
                    {
                        "_id": "601bf4d1f0a78a1846da63fc",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bb0cffa18573f7802d7de",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612427448/toptimviec/wz2stp9hmjcu5n6smkiv.jpg",
                            "name": "CÔNG TY CP HỆ THỐNG THÔNG TIN FPT"
                        },
                        "hashtag": [
                            ".NET",
                            "C#",
                            "SQL",
                            "ASP.NET",
                            "Cloud"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": ".NET DEVELOPER (C#, SQL)"
                    },
                    {
                        "_id": "601bf327f0a78a1846da63cc",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bc076fa18573f7802e0da",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612431454/toptimviec/descc0afjvnbutuzpdc9.png",
                            "name": "CÔNG TY TNHH PHẦN MỀM DSOFT"
                        },
                        "hashtag": [
                            "C#",
                            ".NET",
                            "SQL",
                            "ASP.NET",
                            "Database"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Trên 12 triệu",
                        "title": "NET DEVELOPER"
                    },
                    {
                        "_id": "601bf26bf0a78a1846da6398",
                        "count_hashtag": 5,
                        "employer": {
                            "_id": "601bc02efa18573f7802e09f",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612431382/toptimviec/y7dqblmkstssezdox06g.jpg",
                            "name": "CÔNG TY CỔ PHẦN DỊCH VỤ TƯ VẤN GIẢI PHÁP ĐỔI MỚI ICC VN"
                        },
                        "hashtag": [
                            "SAP",
                            ".NET",
                            "SQL",
                            "ASP.NET",
                            "C#"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": "NHÂN VIÊN LẬP TRÌNH (.NET DEVELOPER)"
                    }
                ],
                "request": "- Nếu ứng tuyển là nhân viên chính thức thì cần có kinh nghiệm lập trình tối thiểu 1 năm (Bắt buộc) đối với: C#, ASP.NET, SQL Server, Xml, etc\n- Nếu ứng tuyển là thực tập sinh thì không cần có kinh nghiệm (vừa mới tốt nghiệp) sẽ được huấn luyện 2 tháng trước khi thử việc chính thức.\n- Ưu tiên ứng viên có kinh nghiệm Coding standands.\n- Ưu tiên ứng viên có kinh nghiệm Design Pattern.\n- Ưu tiên ứng viên có kinh nghiệm làm E-Commerce.\n- Ưu tiên ứng viên biết tiếng Nhật.",
                "salary": "Thoả thuận",
                "title": "LẬP TRÌNH VIÊN .NET DEVELOPER ( C#, ASP.NET )"
            }
        }
        Aos.init({duration: 1000});
    }

    toCompany = (id) => {
        console.log(id)
        window.open("/cong-ty/"+id, "_blank")
    }

   componentDidMount(){
       var match= this.props.match;
       console.log(match);
       if(match){
           var id = match.params.id;
           services.getPost(id).then((res)=>{
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
        let requestList = this.state.post.request.split("\n");
        let id = this.state.post.employer._id;
        console.log(id)
        const jobRecommend = this.state.post.recommend;
        console.log(jobRecommend);
        return (
           
            <div className="col-10 mx-auto ">
                <div className ="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 mt-3">
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
                                {requestList.map(request=>{return <p className="mb-2 p">{request}</p>})}
                            </div>  
                            
                        </div>   
                         
                    </div>
                    <div className="col-lg-4">
                        <div className="container position-sticky list-title bg-white rounded row p-3 mx-auto">
                            <div className="col-12 text-center mt-2"><p className="text-muted">Công ty</p></div>
                            <img className="mx-auto my-5" src={this.state.post.employer.avatar} alt="" width="170px"></img>
                            <div className="col-12"><h1 className="h2 text-break text-center pointer " onClick={(e) =>this.toCompany(id)}>{this.state.post.employer.name}</h1></div>
                            <div className="col-12 mt-3 text-center">
                                <button className="btn btn-primary" onClick={(e) =>this.toCompany(id)}>Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
               </div>
                <h2 className = "mb-2 h4 mt-5" >Công việc liên quan</h2>
                <div className = "row">
                    <div className="col-lg-8 mt-3">
                        <div className="job-item">
                            {this.showJobs(jobRecommend)}
                        </div>
                    </div>     
                </div>
            </div>
            
        );
    }

    showJobs(jobRecommend) {
        console.log(jobRecommend)
        var result = null;
        if (jobRecommend.length > 0) {
            result = jobRecommend.map((job, index) => {
                return (
                    <JobItem 
                        key={index}
                        job={job}
                    />
                )
            })
        }
        return result;
    }
}
export default Post;