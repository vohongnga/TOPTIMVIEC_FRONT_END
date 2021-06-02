import React, { Component } from 'react';
import axios from 'axios';

class ImageUploader extends Component{
    onSelectImage = (e) => {
        var fd = new FormData();
        fd.append("upload_preset", "toptimviec");
        fd.append("file", e.target.files[0]);
        fd.append("folder", "toptimviec");
        axios({
            method: "POST",
            url: "https://api.cloudinary.com/v1_1/pikann22/upload",
            data: fd,
            headers: { "X-Requested-With": "XMLHttpRequest" }
        }).then(rs => {
            this.props.onChange(rs.data.url);
        });
    }
    render(){
        return (
            <div className="col div-image-change p-0" >
                <label>
                    <img src={this.props.imageUrl} alt="" width="170px" height="170px"/>
                    <input type="file" hidden onChange={this.onSelectImage} />
                    <div className="overlay d-flex align-items-center">
                        <div className="text-white text-center mx-auto">Đổi ảnh</div>
                    </div>
                </label>
            </div>
        );
    }
}

export default ImageUploader;