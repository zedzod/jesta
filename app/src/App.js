import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Main from './components/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactRouter from './router/router';
class App extends Component {
  render() {
    return (
      <div>
        
  <Router>

      <ReactRouter/>
  </Router>
  <Footer/>
    </div>
    );
  }
}

export default App;
