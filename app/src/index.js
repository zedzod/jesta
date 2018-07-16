import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(

   <BrowserRouter>
     <App />
   </BrowserRouter>
  
,document.getElementById('root'));
registerServiceWorker();
