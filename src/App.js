import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




/*
<h1 class='top__header'>Ta-Da List</h1>

<div class='container--top__nav'>
  <h2 class='top__list-current'>All Tasks</h2>
  <div class='top__navbar'>
    <select class='top__list-select'>
      <option class='top__list-option'>All Tasks</option>
    </select>
    <button class='top__list-add--btn'>Add List</button>
    <button class='top__list-delete--btn'>Delete List</button>
  </div>
</div>
*/



class TaskInput extends React.Component {
  render() {
    return (
      <div className="add-task">
        <div className="add-task__field">
          <button className="add-task--btn"><span>+</span></button>
          <input className="add-task--input" placeholder="add new task"></input>
        </div>
      </div>
    );
  }
}

class Task extends React.Component {
  render() {
    return (
      <div id="task-0" className="task">
        <div className="task__description">task description</div>
        <div className="task__date">xx/xx/xxxx</div>
        <div className="task__delete"><button className="task__delete--btn">delete</button></div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <h1 class="top__header">Ta-Da List</h1>
          <div class="container--top__nav">
          </div>
          <TaskInput />
        </div>
        <div className="tasks-list">
          <Task />
        </div>
      </div>
    );
  }
}

export default App;
