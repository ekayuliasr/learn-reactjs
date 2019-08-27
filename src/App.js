import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content.js';
import Header from './Header.js';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
