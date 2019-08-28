import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';
import FormContent from './FormContent.js';
import CardContent from './CardContent.js';
import Header from './Header.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return (
   		<Router>
	      <div className="container">
		      <Header />
		      <Route path="/" exact={true} component={Content} />
		      <Route path="/form" component={FormContent} />
		      <Route path="/card" component={CardContent} />
	      </div>
	    </Router>
    );
  }
}

export default App;
