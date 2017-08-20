import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class CurrentList extends React.Component {
  render() {
    return (
      <h2 className="top__list-current">All Tasks</h2>
    );
  }
}

class NavBar extends React.Component {
  render() {
    //const lists = this._getLists();
    //let listNodes;

    return (
      <div className="top__navbar">
        <select className="top__list-select">
          <option className="top__list-option">All Tasks</option>
        </select>
        <button className="top__list-add--btn">Add List</button>
        <button className="top__list-delete--btn">Delete List</button>
      </div>
    );
  }
}

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
          <h1 className="top__header">Ta-Da List</h1>
          <div className="container--top__nav">
            <CurrentList />
            <NavBar />
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
