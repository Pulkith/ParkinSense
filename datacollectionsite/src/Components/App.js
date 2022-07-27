import logo from '../logo.svg';
import '../css/App.css';
import Main from './Main.js'
import React from 'react';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">     
        <Main />
      </div>
  
    );
  }
}
