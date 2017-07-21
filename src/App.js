import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Task extends React.Component {
  render() {
    return (
      <div id='task-0' className='task'>
        <div className='task__description'>task description</div>
        <div className='task__date'>xx/xx/xxxx</div>
        <div className='task__delete'><button className='task__delete--btn'>delete</button></div>
      </div>
    );
  }
}

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
        <Task />
      </div>
    );
  }
}

export default App;
