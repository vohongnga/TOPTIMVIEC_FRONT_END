import React from 'react';

export default class ToolBar extends React.Component {
    onClick = (e) => {
        var name = e.currentTarget.name;
        this.props.onClickToolBar(name)
    }

    render() {
        var { detail } = this.props;
        return (
            <div>
                <button onClick={this.onClick} name="create"><i className={detail ? "fas fa-plus-circle fa-xs" : "fas fa-plus-circle"}></i></button>
                <button onClick={this.onClick} name="up"><i className={detail ? "fas fa-arrow-alt-circle-up fa-xs" : "fas fa-arrow-alt-circle-up"}></i></button>
                <button onClick={this.onClick} name="down"><i className={detail ? "fas fa-arrow-alt-circle-down fa-xs" : "fas fa-arrow-alt-circle-down"}></i></button>
                <button onClick={this.onClick} name="delete"><i className={detail ? "fas fa-minus-circle fa-xs" : "fas fa-minus-circle"}></i></button>
            </div>
        )
    }
}