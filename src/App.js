import React, { Component } from 'react';
import Index from './components/Index';
import Employer from './components/nhatuyendung/Index/Index';
import List from './components/nhatuyendung/DanhSach/Index';
import Footer from './components/comm/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Register_NTD from './components/nhatuyendung/Register_NTD';
import Register_NTV from './components/nguoitimviec/Register_NTV';
import Header from './components/comm/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/test" component={Footer} />
          <Route path="/nha-tuyen-dung" component={Employer} />
          <Route path="/danh-sach" component={List} />
          <Route path="/dang-nhap">
            <Login />
          </Route>
          <Route path="/dang-ky" exact>
            <Header/>
            <Register />
          </Route>
          <Route path="/dang-ky/nha-tuyen-dung">
            <Header />
            <Register_NTD />
          </Route>
          <Route path="/dang-ky/nguoi-tim-viec">
            <Header />
            <Register_NTV />
          </Route>
        </Switch>

      </Router>
    );

  }
}
export default App;
