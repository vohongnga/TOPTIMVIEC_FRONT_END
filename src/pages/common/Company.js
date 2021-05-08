import React, { Component } from 'react';
import CompanyItem from '../../components/common/CompanyItem';
import callApi from '../../utils/apiCaller';

class Company extends Component{
    constructor(props) {
        super(props);
        this.state={
            "list_employer": [
                {
                    "_id": "601baec5fa18573f7802d69c",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426930/toptimviec/bbzu987kq48drczsuq5f.jpg",
                    "bio": "FINGERMOBILE CO., LTD is IT Company based in HCMC providing Advertising Platform and other useful IT...",
                    "name": "FINGER MOBILE COMPANY LIMITED"
                },
                {
                    "_id": "601baed0fa18573f7802d69f",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426936/toptimviec/asclkai5krbb5offzgs5.jpg",
                    "bio": "Công ty cổ phần công nghệ và dịch vụ iMap chuyên hoạt động trên lĩnh vực và giải pháp về bản đồ số, ...",
                    "name": "CÔNG TY CP CÔNG NGHỆ VÀ DỊCH VỤ IMAP"
                },
                {
                    "_id": "601baed5fa18573f7802d6a2",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426942/toptimviec/vyeynvhps01ezikg9flx.png",
                    "bio": "Được thành lập vào năm 2017, chúng tôi là một đội ngũ tuyệt vời gồm những người giải quyết vấn đề, n...",
                    "name": "CÔNG TY CỔ PHẦN CÔNG NGHỆ WAND"
                },
                {
                    "_id": "601baedefa18573f7802d6a7",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426950/toptimviec/bzh4b0vnvh8cdgx2piyi.jpg",
                    "bio": "Được thành lập vào năm 2014, iKame với những con người nhỏ có ước mơ lớn, và bắt đầu từ những việc n...",
                    "name": "CÔNG TY CỔ PHẦN IKAME VIỆT NAM"
                },
                {
                    "_id": "601baee5fa18573f7802d6ac",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426958/toptimviec/p3y7mbkg9bbthobxsx57.png",
                    "bio": "",
                    "name": "CÔNG TY TNHH MDA ENTERTAINMENT"
                },
                {
                    "_id": "601baeecfa18573f7802d6af",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426964/toptimviec/nf4fa5s4eby7lwigpfmb.png",
                    "bio": "FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với nhiệm vụ chính là gia công phần mềm t...",
                    "name": "CÔNG TY TNHH PHẦN MỀM FPT HỒ CHÍ MINH"
                },
                {
                    "_id": "601baef1fa18573f7802d6b2",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426969/toptimviec/hsie9k4fxpwgw0j44tgx.png",
                    "bio": "Lĩnh vực hoạt động: Tư vấn, thiết kế mạng lưới, phần mềm điện tử viễn thông cho các đối tác nước ngo...",
                    "name": "CÔNG TY TNHH THƯƠNG MẠI VÀ GIẢI PHÁP VIỄN THÔNG QUỐC TẾ"
                },
                {
                    "_id": "601baef9fa18573f7802d6b5",
                    "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612426977/toptimviec/skq9oqzfkjq3xckl4n55.png",
                    "bio": "TopCV được thành lập từ 2014, chỉ sau 7 năm, TopCV đã dẫn đầu thị trường Việt Nam trong mảng cung ứn...",
                    "name": "Công ty Cổ phần TOPCV Việt Nam"
                }
            ]
        };
    }
    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        let page = params.get('page');
        if (page === null) {
            page = 0;
        }
        callApi("/employer?name=&page=" + page, 'GET').then(rs => {
            console.log(rs);
        });
    }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        
        return (
            <div>
                <div className="company-search-div pb-5 pt-3">
                    <div className="col-lg-10 row py-5 mx-auto">
                        <div className="col-lg-10 col-md-9">
                            <input type="text" className="form-control form-control-lg"placeholder="Tên công ty"/>
                        </div>
                        <div className="col-lg-2 col-md-3 mt-1 mt-md-0">
                            <button type="submit" className="btn btn-success btn-lg btn-block word-wrap text-truncate" onClick={this.onSubmitSearch}>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
                <h2 className="h2 text-center mt-5">- DANH SÁCH CÔNG TY -</h2>
                <div className="row col-lg-9 mx-auto mt-5">
                    {this.showCompanies(this.state.list_employer)}
                </div>
            </div>
        );
    }
    showCompanies(companies) {
        var result = null;
        if (companies.length > 0) {
            result = companies.map((company, index) => {
                return (
                    <CompanyItem 
                        key={index}
                        company={company}
                    />
                )
            })
        }
        return result;
    }
}


export default Company;