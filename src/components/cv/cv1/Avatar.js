import React from 'react';
import "./stylecv1.css"

class Avatar extends React.Component {

    onChangeAvatar = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.currentTarget.textContent;
        this.props.onChange(name, value);
    }

    render() {
        return (
            <div className="profile-container">
                <img className="profile" src={this.props.avatar} alt="" width="170px" height="170px" />
                <h1 className="name">
                    <p suppressContentEditableWarning contentEditable={this.props.edit} onBlur={this.onChangeAvatar} name="name">{this.props.name}</p>
                </h1>
                <h3 className="tagline">
                    <p suppressContentEditableWarning contentEditable={this.props.edit} onBlur={this.onChangeAvatar} name="position" >{this.props.position}</p>
                </h3>
            </div>
        );
    }

};


export default Avatar;

