import React, { Component } from 'react';
import '../../style.css';
class Advertisements extends Component {
    render() {
        return (
            <div className="col-md-4 d-none d-sm-none d-md-none d-lg-block mt-3">
                <div className="container sticky-top advertisement">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center">Quảng cáo</h4>
                            <img src="https://cdn.vietnambiz.vn/2019/12/18/photo-1-15766667578391776901975.jpg" width="100%" className="mt-2"></img>
                            <img src="https://cdn.vietnambiz.vn/2019/12/18/photo-1-15766667578391776901975.jpg" width="100%" className="mt-2"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Advertisements;
