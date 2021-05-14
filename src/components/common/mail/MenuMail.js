import React, { Component} from 'react';
import { Link } from "react-router-dom";

class MenuMail extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 center">
        <ul className="list-group">
          <li className="list-group-item text-center py-4">
            <Link to="/hop-thu">Hộp thư đến</Link>
          </li>
          <li className="list-group-item text-center py-4">
            <Link to="/hop-thu/gui">Hộp thư đã gửi</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default MenuMail;
