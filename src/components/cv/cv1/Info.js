import React from 'react';
import Moment from 'moment';
import "./stylecv1.css"

export default class Info extends React.Component {
    onChangeInfo = (e) => {
        const name = e.target.getAttribute("name");
        let value = null;
        (name !== 'gender') ? value = e.currentTarget.textContent : value = Boolean(e.target.value);
        return this.props.onChangeInfo(name, value)
    }
    onChangeDate = (e) => {
        let value = e.target.value;
        return this.props.onChangeInfo('dob', value)
    }
    render() {
        const { email, phone, dob, gender, address, edit } = this.props;
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
                        {edit ? <p><input type="date" value={dob} onChange={this.onChangeDate} name="dob" max={Moment(new Date()).format('yyyy-MM-DD')}/></p> : <p>{dob}</p>}
                    </li>
                    <li className="gender"><i className="fas fa-user-circle" />
                        {
                            (edit) ? <p>
                                <input type="radio" id="male" name="gender" value="" onClick={this.onChangeInfo} defaultChecked={true} />
                                <label htmlFor="male">Nam</label>
                                <input type="radio" id="female" name="gender" value="1" className="ml-3" onClick={this.onChangeInfo} />
                                <label htmlFor="female">Nữ</label>
                            </p> : <p>{gender ? 'Nữ' : 'Nam'}</p>
                        }
                    </li>
                    <li className="address"><i className="fas fa-map-marker-alt" />
                        <p suppressContentEditableWarning contentEditable={edit} onBlur={this.onChangeInfo} name="address">{address}</p>
                    </li>
                </ul>
            </div>
        );
    }
}