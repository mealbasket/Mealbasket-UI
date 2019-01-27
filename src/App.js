import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container py-5">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/sign-up' component={SignUp} />
            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
