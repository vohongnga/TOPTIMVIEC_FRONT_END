import React from 'react';
import "./stylecv1.css"

export default class ContentItemDetail extends React.Component {

    onChangeContentItem = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.currentTarget.textContent;
        const {indexDetail} = this.props;
        this.props.onChangeContentItem(name, value, indexDetail);
    }

    render() {
        const {contentDetail, edit} = this.props;
        
        return (
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">
                            <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeContentItem} name="title">{contentDetail.title}</p>
                        </h3>
                            <div className="time">
                                <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeContentItem} name="time">{contentDetail.time}</p>
                            </div>
                    </div>{/*//upper-row*/}
                    <div className="company">
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeContentItem} name="position">{contentDetail.position}</p>    
                    </div>
                </div>{/*//meta*/}
                <div className="details">
                    
                    <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeContentItem} name="detail">{contentDetail.detail}</p>
                </div>{/*//details*/}
            </div>
        );
    }

}