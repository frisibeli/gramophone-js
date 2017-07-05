import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomeScene from './containers/HomeScreenContainer'
import ChannelScene from './containers/ChannelScreenContainer.js'

class App extends Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
       <Router>
         <Switch>
            <Route path="/channel/:id" component={ChannelScene} />
            <Route path="/" component={HomeScene} />            
          </Switch>
      </Router>
    );
  }
}

export default App;
