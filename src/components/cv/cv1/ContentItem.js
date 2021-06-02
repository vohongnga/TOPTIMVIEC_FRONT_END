import React from 'react';
import ContentItemDetail from './ContentItemDetail';
import ToolBar from './ToolBar'
import "./stylecv1.css"

export default class ContentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toolbar: false };
    }

    onChangeContent = (name, value, indexDetail) => {
        var { indexItem } = this.props;
        this.props.onChangeContent(name, value, indexItem, indexDetail);
    }

    onClickToolBarItem = (name) => {
        this.props.onClickToolBarItem(name, this.props.indexItem, 'content')
    }

    onClickToolBarDetail = (name, indexDetail) => {
        this.props.onClickToolBarDetail(name, this.props.indexItem, indexDetail)
    }

    onChangeContentTitle = (e) => {
        var value = e.currentTarget.textContent;
        this.props.onChangeContentTitle(value, this.props.indexItem);
    }

    render() {
        var { content, title, edit } = this.props;
        var elmDetail = content.map((contentDetail, index) => {
            return (
                <ContentItemDetail
                    key={index}
                    contentDetail={contentDetail}
                    indexDetail={index}
                    edit={edit}
                    onChangeContentItem={this.onChangeContent}
                    onClickToolBarDetail={this.onClickToolBarDetail}
                />
            )
        })
        return (
            <div onMouseEnter={() => this.setState({ toolbar: true })} onMouseLeave={() => this.setState({ toolbar: false })}>
                <section className="section experiences-section">
                    {edit ? this.state.toolbar ? <ToolBar onClickToolBar={this.onClickToolBarItem} /> : "" : ""}
                    <h2 className="section-title">
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeContentTitle}>{title}</p>
                    </h2>
                    {elmDetail}
                </section>{/*//section*/}
            </div>
        );
    }

}