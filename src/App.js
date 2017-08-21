import React, { Component } from 'react';
import './App.css';


class CurrentList extends React.Component {
  render() {
    return (
      <h2 className="top__list-current">All Tasks</h2>
    );
  }
}

class BtnAddTask extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <button className="top__list-add--btn">Add List</button>
    );
  }
}

class BtnDeleteTask extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <button className="top__list-delete--btn">Delete List</button>
    );
  }
}

class SelectLists extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <select className="top__list-select">
        <option className="top__list-option">All Tasks</option>
        <option className="top__list-option">Another example for now</option>
        <option className="top__list-option">Last example</option>
      </select>
    );
  }
}

class NavBar extends React.Component {
  render() {
    //const lists = this._getLists();
    //let listNodes;

    return (
      <div className="top__navbar">
        <SelectLists />
        <BtnAddTask />
        <BtnDeleteTask />
      </div>
    );
  }
}

class TaskInput extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  _handleAddClick() {

  }

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
      <div className="task">
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
      {id: 1, description: 'testing1 tasks description', date: 'test/date/one'},
      {id: 2, description: 'test2 description of tasks', date: 'second/date/test'}
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
        {tasks}
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
