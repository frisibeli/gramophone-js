import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactPlayer controls={true} soundcloudConfig={{showArtwork:false, clientId:"2t9loNQH90kzJcsFCODdigxfp325aq4z"}} url="https://soundcloud.com/vivo-montana-brass-band/new-york" playing />
      </div>
    );
  }
}

export default App;
