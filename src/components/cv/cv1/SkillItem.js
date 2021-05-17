import React from 'react';
import "./stylecv1.css"

export default class SkillItem extends React.Component {
    onChangeTitleSkill = (e) => {
        var name = e.target.getAttribute("name");
        var value = e.currentTarget.textContent;
        var { index, onChangeTitleSkill } = this.props;
        return onChangeTitleSkill(name, value, index)
    }
    onChangeLevelSkill = (e) => {
        var name = e.target.name;
        var value = parseInt(e.target.value);
        console.log(value)
        var { index, onChangeLevelSkill } = this.props;
        return onChangeLevelSkill(name, value, index)
    }
    render() {
        var { skill, edit } = this.props;
        return (
            <div className="item">
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