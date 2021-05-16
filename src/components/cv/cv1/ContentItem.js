import React from 'react';
import ContentItemDetail from './ContentItemDetail';
import "./stylecv1.css"

export default class ContentItem extends React.Component {
    
    onChangeContent = (name, value, indexDetail) => {
        var {indexItem} = this.props;
        this.props.onChangeContent(name,value,indexItem,indexDetail);
    }
    render() {
        var {content, title, edit} = this.props;
        
        var elmDetail = content.map((contentDetail, index) =>{
            return (
                <ContentItemDetail
                    key = {index}
                    contentDetail = {contentDetail}
                    indexDetail = {index}
                    edit = {edit}
                    onChangeContentItem = {this.onChangeContent}
                />
            )
        })

        return (
            <div>
                <section className="section experiences-section">
                    <h2 className="section-title">
                        <p name="title">{title}</p>
                    </h2>
                    {elmDetail}
                </section>{/*//section*/}
            </div>
        );
    }

}