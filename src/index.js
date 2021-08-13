import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import './styles/global.css';

import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
      <Routes/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
