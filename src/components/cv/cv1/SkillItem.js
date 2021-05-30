import React from 'react';
import "./stylecv1.css"

export default class SkillItem extends React.Component {
    onChangeTitleSkill = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.currentTarget.textContent;
        const { index, onChangeTitleSkill } = this.props;
        return onChangeTitleSkill(name, value, index)
    }
    onChangeLevelSkill = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        const { index, onChangeLevelSkill } = this.props;
        return onChangeLevelSkill(name, value, index)
    }
    render() {
        const { skill, edit } = this.props;
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