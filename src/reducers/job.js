import * as types from '../constants/ActionTypes';

var initialState = [{
                        "_id": "601c3c8936b6338524f9f57b",
                        "employer": {
                            "_id": "601bc2ddfa18573f7802e292",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612432069/toptimviec/crczb76skyrebtjdx9so.jpg",
                            "name": "CÔNG TY TNHH W2SOLUTION VIỆT NAM"
                        },
                        "hashtag": [
                            ".NET",
                            "Tester",
                            "SQL",
                            "ASP.NET",
                            "C#"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": "LẬP TRÌNH VIÊN .NET DEVELOPER ( C#, ASP.NET )"
                    },
                    {
                        "_id": "601c3c8736b6338524f9f579",
                        "employer": {
                            "_id": "601bc2ddfa18573f7802e292",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612432069/toptimviec/crczb76skyrebtjdx9so.jpg",
                            "name": "CÔNG TY TNHH W2SOLUTION VIỆT NAM"
                        },
                        "hashtag": [
                            "ASP.NET",
                            ".NET",
                            "C#",
                            "SQL"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": "THỰC TẬP SINH NET DEVELOPER(C#, ASP.NET)"
                    },
                    {
                        "_id": "601c3c8536b6338524f9f577",
                        "employer": {
                            "_id": "601bb074fa18573f7802d7a1",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612427356/toptimviec/sotpmoi2wwsq35misllv.jpg",
                            "name": "TẬP ĐOÀN DIGITAL NOVAON"
                        },
                        "hashtag": [
                            "PHP",
                            "C#",
                            "Tester",
                            "Agile",
                            "CSS"
                        ],
                        "place": [
                            "Hà Nội",
                            "Hồ Chí Minh"
                        ],
                        "salary": "8-13 triệu",
                        "title": "TESTER"
                    },
                    {
                        "_id": "601c3c8236b6338524f9f575",
                        "employer": {
                            "_id": "601bca5afa18573f7802e885",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612433987/toptimviec/gqm2at3pi4ccxoztgihs.jpg",
                            "name": "CÔNG TY TNHH WEE DIGITAL"
                        },
                        "hashtag": [
                            "CSS",
                            "Java",
                            "JavaScript",
                            "ReactJS"
                        ],
                        "place": [
                            "Toàn quốc"
                        ],
                        "salary": "Trên 10 triệu",
                        "title": "WEB DEVELOPER"
                    },
                    {
                        "_id": "601c3c8036b6338524f9f573",
                        "employer": {
                            "_id": "601bc981fa18573f7802e7ce",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612433770/toptimviec/idhtq9lcy8pfsroefixk.jpg",
                            "name": "CÔNG TY TNHH CÔNG NGHỆ FASTWORK VIỆT NAM"
                        },
                        "hashtag": [
                            "CSS",
                            "Java",
                            "JavaScript",
                            "NodeJS",
                            "JSON"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "10-18 triệu",
                        "title": "WEB/MOBILE DEVELOPER (AJAX/JSON/JAVASCRIPT/HTML/CSS) (LƯƠNG NET: 10 - 18TR/THÁNG)"
                    },
                    {
                        "_id": "601c3c7e36b6338524f9f571",
                        "employer": {
                            "_id": "601bafabfa18573f7802d71f",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612427155/toptimviec/aoudzdc0h3vz687yvguf.jpg",
                            "name": "CÔNG TY CỔ PHẦN GIẢI PHÁP SÁNG TẠO TÂM ĐỒNG TÂM"
                        },
                        "hashtag": [
                            "CSS",
                            "Designer",
                            "Java",
                            "JavaScript",
                            "HTML5"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "Tới 25 triệu",
                        "title": "UI/UX DESGINER"
                    },
                    {
                        "_id": "601c3c7c36b6338524f9f56f",
                        "employer": {
                            "_id": "601bcd1afa18573f7802eabe",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434691/toptimviec/xs5lrkf3ussczhismj7n.png",
                            "name": "CÔNG TY CỔ PHẦN VNETWORK"
                        },
                        "hashtag": [
                            "Cloud"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "7-10 triệu",
                        "title": "NHÂN VIÊN CSKH - GIẢI PHÁP CÔNG NGHỆ THÔNG TIN"
                    },
                    {
                        "_id": "601c3c7936b6338524f9f56b",
                        "employer": {
                            "_id": "601bb39ffa18573f7802d9ce",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612428168/toptimviec/zgwndpohzj4su2urn5ac.png",
                            "name": "CÔNG TY CỔ PHẦN SEGU VIỆT NAM"
                        },
                        "hashtag": [
                            "Agile",
                            "Tester"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "Trên 7 triệu",
                        "title": "NHÂN VIÊN TESTER"
                    },
                    {
                        "_id": "601c3c7736b6338524f9f569",
                        "employer": {
                            "_id": "601bbf88fa18573f7802e027",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612431217/toptimviec/wjatpmi7imxhlizsexhl.png",
                            "name": "CÔNG TY TNHH DỊCH VỤ CÔNG NGHỆ TP"
                        },
                        "hashtag": [
                            "Games",
                            "Unity",
                            "Senior",
                            "SQL"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "20-40 triệu",
                        "title": "SENIOR UNITY DEVELOPER"
                    },
                    {
                        "_id": "601c3c7436b6338524f9f567",
                        "employer": {
                            "_id": "601bcd0bfa18573f7802eab5",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434676/toptimviec/nbatqjfapjcnypzejq0d.png",
                            "name": "BỆNH VIỆN QUỐC TẾ DOLIFE"
                        },
                        "hashtag": [
                            "Database",
                            "Networking",
                            "iOS"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "10-15 triệu",
                        "title": "NHÂN VIÊN IT ADMIN"
                    },
                    {
                        "_id": "601c3c7136b6338524f9f563",
                        "employer": {
                            "_id": "601bc297fa18573f7802e266",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612431999/toptimviec/pj0h193gw8hzvgpnsnco.png",
                            "name": "CÔNG TY CỔ PHẦN VNEXT SOFTWARE"
                        },
                        "hashtag": [
                            "CSS",
                            "Java",
                            "JQuery",
                            "PHP",
                            "Laravel"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "Tới 28 triệu",
                        "title": "LẬP TRÌNH VIÊN PHP"
                    },
                    {
                        "_id": "601c3c6f36b6338524f9f561",
                        "employer": {
                            "_id": "601bbc23fa18573f7802ddcf",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612430348/toptimviec/nsfl6idehoiycrxjsjfy.jpg",
                            "name": "CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ TSG"
                        },
                        "hashtag": [
                            "IT Support",
                            "ERP"
                        ],
                        "place": [
                            "Hồ Chí Minh",
                            "Bình Dương",
                            "Đồng Nai"
                        ],
                        "salary": "7-10 triệu",
                        "title": "NHÂN VIÊN IT SUPPORT (IT HELPDESK)"
                    },
                    {
                        "_id": "601c3c6b36b6338524f9f55d",
                        "employer": {
                            "_id": "601bbafbfa18573f7802dd41",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612430052/toptimviec/blszgblasscz6lvl7k3l.png",
                            "name": "NEXT WAVES R&D CENTER - NGS GROUP"
                        },
                        "hashtag": [
                            "ERP",
                            "Tester",
                            "Intern",
                            "Senior"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "15-25 triệu",
                        "title": "QC/ TESTER"
                    },
                    {
                        "_id": "601c3c6936b6338524f9f55b",
                        "employer": {
                            "_id": "601bbafbfa18573f7802dd41",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612430052/toptimviec/blszgblasscz6lvl7k3l.png",
                            "name": "NEXT WAVES R&D CENTER - NGS GROUP"
                        },
                        "hashtag": [
                            "Agile",
                            "JavaScript",
                            "Java",
                            "CSS",
                            "Angular"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Tới 25 triệu",
                        "title": "FRONT-END DEVELOPER"
                    },
                    {
                        "_id": "601c3c6536b6338524f9f557",
                        "employer": {
                            "_id": "601bcb71fa18573f7802e95b",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434265/toptimviec/hdm7nepujutzs3jph3td.png",
                            "name": "CÔNG TY CỔ PHẦN JVB VIỆT NAM"
                        },
                        "hashtag": [
                            "Java",
                            "JavaScript",
                            "ReactJS",
                            "C#",
                            "Angular"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "Thoả thuận",
                        "title": "JUNIOR REACTJS DEVELOPER"
                    },
                    {
                        "_id": "601c3c6236b6338524f9f555",
                        "employer": {
                            "_id": "601bccf6fa18573f7802eaa2",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434655/toptimviec/sakuax3hiejdkhnmheox.jpg",
                            "name": "NKS"
                        },
                        "hashtag": [
                            "ERP"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Tới 60 triệu",
                        "title": "NHÂN VIÊN KINH DOANH PHẦN MỀM"
                    },
                    {
                        "_id": "601c3c6036b6338524f9f553",
                        "employer": {
                            "_id": "601bc257fa18573f7802e238",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612431936/toptimviec/z0jqdzswgkn2kqxcxuds.jpg",
                            "name": "Công ty TNHH MTV Propzy Việt Nam"
                        },
                        "hashtag": [
                            "Business Analyst",
                            "Senior",
                            "Agile",
                            "OOP"
                        ],
                        "place": [
                            "Hồ Chí Minh"
                        ],
                        "salary": "Thoả thuận",
                        "title": "SENIOR BUSINESS ANALYST"
                    },
                    {
                        "_id": "601c3c5e36b6338524f9f551",
                        "employer": {
                            "_id": "601bccedfa18573f7802ea9b",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434646/toptimviec/ekbiytbuhittksnzzwew.jpg",
                            "name": "Công ty cổ phần phần mềm Matechmobile"
                        },
                        "hashtag": [
                            "Tester",
                            "Designer"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "Trên 10 triệu",
                        "title": "PRODUCT OWNER MOBILE APPS"
                    },
                    {
                        "_id": "601c3c5c36b6338524f9f54f",
                        "employer": {
                            "_id": "601bccedfa18573f7802ea9b",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434646/toptimviec/ekbiytbuhittksnzzwew.jpg",
                            "name": "Công ty cổ phần phần mềm Matechmobile"
                        },
                        "hashtag": [
                            "Designer",
                            "Manager",
                            "Project Manager"
                        ],
                        "place": [
                            "Hà Nội"
                        ],
                        "salary": "15-30 triệu",
                        "title": "UI/UX DESIGNER APPS MOBILE"
                    },
                    {
                        "_id": "601c3c5a36b6338524f9f54d",
                        "employer": {
                            "_id": "601bcce9fa18573f7802ea98",
                            "avatar": "http://res.cloudinary.com/pikann22/image/upload/v1612434642/toptimviec/iywzllxr6pn1jnpcg570.jpg",
                            "name": "CÔNG TY CỔ PHẦN SOC"
                        },
                        "hashtag": [
                            "JavaScript",
                            "ReactJS",
                            "SQL",
                            "React Native",
                            "Java"
                        ],
                        "place": [
                            "Toàn quốc"
                        ],
                        "salary": "7-15 triệu",
                        "title": "LẬP TRÌNH VIÊN FRONT END REACT NATIVE"
                    }
                    ];

const jobs = (state = initialState, action) => {
    switch(action.type){
        default: 
            return [...state];
    }
};

export default jobs;