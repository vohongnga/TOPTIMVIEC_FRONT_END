import React, { Component } from 'react';
import Aos from "aos";
import JobItem from '../../components/common/JobItem';
import '../../style.css';

class ManagementPost extends Component{

    constructor(props) {
        super(props);
        this.state={
            "list_post": [
                {
                  "_id": "6059a9077f96d2ffc401c85b",
                  "employer": {
                    "_id": "6059a277958626ca6024761d",
                    "avatar": "",
                    "name": "ABC"
                  },
                  "hashtag": [
                    "Python"
                  ],
                  "place": [
                    "Hà Nội"
                  ],
                  "salary": "Thỏa thuận",
                  "title": "ABC"
                },
                {
                  "_id": "6059a9067f96d2ffc401c858",
                  "employer": {
                    "_id": "6059a277958626ca6024761d",
                    "avatar": "",
                    "name": "ABC"
                  },
                  "hashtag": [
                    "Python"
                  ],
                  "place": [
                    "Hà Nội"
                  ],
                  "salary": "Thỏa thuận",
                  "title": "ABC"
                },
                {
                  "_id": "6059a9067f96d2ffc401c855",
                  "employer": {
                    "_id": "6059a277958626ca6024761d",
                    "avatar": "",
                    "name": "ABC"
                  },
                  "hashtag": [
                    "Python"
                  ],
                  "place": [
                    "Hà Nội"
                  ],
                  "salary": "Thỏa thuận",
                  "title": "ABC"
                },
                {
                  "_id": "6059a9057f96d2ffc401c852",
                  "employer": {
                    "_id": "6059a277958626ca6024761d",
                    "avatar": "",
                    "name": "ABC"
                  },
                  "hashtag": [
                    "Python"
                  ],
                  "place": [
                    "Hà Nội"
                  ],
                  "salary": "Thỏa thuận",
                  "title": "ABC"
                },
                {
                  "_id": "6059a9047f96d2ffc401c84f",
                  "employer": {
                    "_id": "6059a277958626ca6024761d",
                    "avatar": "",
                    "name": "ABC"
                  },
                  "hashtag": [
                    "Python"
                  ],
                  "place": [
                    "Hà Nội"
                  ],
                  "salary": "Thỏa thuận",
                  "title": "ABC"
                },
                {
                  "_id": "6059a9037f96d2ffc401c84c",
                  "employer": {
                    "_id": "6059a277958626ca6024761d",
                    "avatar": "",
                    "name": "ABC"
                  },
                  "hashtag": [
                    "Python"
                  ],
                  "place": [
                    "Hà Nội"
                  ],
                  "salary": "Thỏa thuận",
                  "title": "ABC"
                }
              ]
        }
        Aos.init({duration: 1000});
    }



   componentDidMount(){

   }
    render(){
        document.body.style.backgroundColor = "#eceff1";
        return (
                <div className = "row">
                    <div className="col-lg-8 mt-3">
                        <div className="job-item">
                            {this.showJobs()}
                        </div>
                    </div>
                </div>
        );
    }

    showJobs() {
        var posts = this.state.list_post;
        var result = null;
        if (posts.length > 0) {
            result = posts.map((post, index) => {
                return (
                    <JobItem
                        key={index}
                        job={post}
                    />
                )
            })
        }
        return result;
    }
}
export default ManagementPost;