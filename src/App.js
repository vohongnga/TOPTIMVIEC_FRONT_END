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
import Register_NTV from './components/Register_NTV/Register_NTV';
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register" exact>
            <Header />
            <Register />
          </Route>
          <Route path="/register/NTD">
            <Header />
            <Register_NTD />
          </Route>
          <Route path="/register/NTV">
            <Header />
            <Register_NTV />
          </Route>
        </Switch>

      </Router>
    );

  }
}
export default App;
