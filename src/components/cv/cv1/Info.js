import React from 'react';
import "./stylecv1.css"

export default class Info extends React.Component {
    onChangeInfo = (e) => {
        var name = e.target.getAttribute("name");
        var value = e.currentTarget.textContent;
        return this.props.onChangeInfo(name, value)
    }
    render() {
        var { email, phone, dob, gender, address, edit } = this.props;

        return (
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope" />
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeInfo} name="email">{email}</p>
                    </li>
                    <li className="phone"><i className="fas fa-phone" />
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeInfo} name="phone">{phone}</p>
                    </li>
                    <li className="birthday"><i className="fas fa-birthday-cake" />
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeInfo} name="dob">{dob}</p>
                    </li>
                    <li className="gender"><i className="fas fa-user-circle" />
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeInfo} name="gender">{gender?'Nam':'Nữ'}</p>
                    </li>
                    <li className="address"><i className="fas fa-map-marker-alt" />
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeInfo} name="address">{address}</p>
                    </li>
                </ul>
            </div>
        );
    }
}