import React from 'react';
import ToolBar from './ToolBar';
import "./stylecv1.css"

export default class SkillItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toolbar: false };
    }
    onChangeTitleSkill = (e) => {
        var name = e.target.getAttribute("name");
        var value = e.currentTarget.textContent;
        var { index, onChangeTitleSkill } = this.props;
        return onChangeTitleSkill(name, value, index)
    }
    onChangeLevelSkill = (e) => {
        var name = e.target.name;
        var value = parseInt(e.target.value);
        var { index, onChangeLevelSkill } = this.props;
        return onChangeLevelSkill(name, value, index)
    }
    onClickToolBarSkill = (name) => {
        return this.props.onClickToolBarSkill(name, this.props.index, 'skill');
    }
    render() {
        var { skill, edit } = this.props;
        return (
            <div className="item" onMouseEnter={() => this.setState({ toolbar: true })} onMouseLeave={() => this.setState({ toolbar: false })}>
                {edit ? this.state.toolbar ? <ToolBar onClickToolBar={this.onClickToolBarSkill} detail={true} /> : "" : ""}
                <h3 className="level-title">
                    <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeTitleSkill} name="skill">{skill.skill}</p>
                </h3>
                <div className="level-bar">
                    <input type="range" min="0" max="5" value={skill.rate} name="rate" className="theme-bar" onChange={this.onChangeLevelSkill} disabled={!edit} />
                </div>
            </div>
        );
    }

}