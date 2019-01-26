import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Layout/Header.js';
import Footer from './Components/Layout/Footer.js';
import Home from './Components/Home.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path='/' component={Home} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
