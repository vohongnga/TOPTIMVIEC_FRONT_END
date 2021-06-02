import React from 'react';
import callApi from '../../../utils/apiCaller';
import ImageUploader from '../../common/ImageUploader';
import "./stylecv1.css"

class Avatar extends React.Component {

    onChangeAvatar = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.currentTarget.textContent;
        this.props.onChange(name, value);
    }

    onChangeImage = (url) => {
        callApi("avatar", "PUT", {
            "avatar": url
        }).then(rs => {
            this.props.onChangeImage(url);
        });
    }

    render() {
        let { edit, avatar, name, position } = this.props;
        return (
            <div className="profile-container">
                {/* <img className="profile" src={this.props.avatar} alt="" width="170px" height="170px" /> */}
                <div className="profile div-image-change">
                    {edit ? <ImageUploader imageUrl={avatar} onChange={this.onChangeImage}></ImageUploader> : <img src={avatar} alt="Avatar" width="170px" height="170px"/>}
                </div>
                <h1 className="name">
                    <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeAvatar} name="name">{name}</p>
                </h1>
                <h3 className="tagline">
                    <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeAvatar} name="position" >{position}</p>
                </h3>
            </div>
        );
    }

};


export default Avatar;

