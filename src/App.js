import React, { Component } from 'react';
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
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div id={this.props.key} className="task">
        <div className="task__description">{this.props.description}</div>
        <div className="task__date">{this.props.date}</div>
        <div className="task__delete"><button className="task__delete--btn">delete</button></div>
      </div>
    );
  }
}

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  _getTasks() {
    const tasksList = [
      {id: 1, description: 'testing1 tasks description', date: 'test/date/2017'},
      {id: 2, description: 'test2 description of tasks', date: 'second/date/2017'}
    ];

    return tasksList.map((task) => {
      return (
        <Task key={task.id} description={task.description} date={task.date} />
      );
    });
  }

  render() {
    const  tasks = this._getTasks();
    return (
      <div className="tasks-list">
        {tasks}}
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
        <Tasks />
      </div>
    );
  }
}

export default App;
