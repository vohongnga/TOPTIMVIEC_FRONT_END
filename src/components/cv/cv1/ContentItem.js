import React from 'react';
import ContentItemDetail from './ContentItemDetail';
import ToolBar from './ToolBar';
import "./stylecv1.css"

export default class ContentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toolbar: false
        }
    }

    onChangeContent = (name, value, indexDetail) => {
        var { indexItem } = this.props;
        this.props.onChangeContent(name, value, indexItem, indexDetail);
    }

    render() {
        var { content, title, edit } = this.props;
        // var toolbar = null
        // if(this.state.toolbar) toolbar=<ToolBar/>
        var elmDetail = content.map((contentDetail, index) => {
            return (
                <div key={index} >
                    <ContentItemDetail
                        contentDetail={contentDetail}
                        indexDetail={index}
                        edit={edit}
                        onChangeContentItem={this.onChangeContent}
                    />
                </div>
            )
        })

        return (
            <div onMouseOver={() => this.setState({ toolbar: true })} onMouseOut={() => this.setState({ toolbar: false })}>
                <section className="section experiences-section">
                    
                    <h2 className="section-title">
                        <p name="title">{title}</p>
                    </h2>   
                    {this.state.toolbar?<ToolBar/>:""}
                    {elmDetail}
                </section>{/*//section*/}
            </div>
        );
    }

}