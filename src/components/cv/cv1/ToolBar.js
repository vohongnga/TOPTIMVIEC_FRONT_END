import React from 'react';

export default class ToolBar extends React.Component {
    onClick = (e) => {
        console.log(e)
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick} name=""><i className="fas fa-arrow-alt-circle-up"></i></button>   
                <button onClick={this.onClick} name=""><i className="fas fa-arrow-alt-circle-down"></i></button>
            </div>
        )
    }
}