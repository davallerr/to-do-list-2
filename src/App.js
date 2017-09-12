import React, { Component } from 'react';
import './App.css';


class CurrentList extends React.Component {
  render() {
    return (
      <h2 className="top__list-current">All Tasks for now</h2>
    );
  }
}

class SelectLists extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'All Tasks'
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
    // also needs to change list view
  }

  _getLists() {
    const listOptions = [
      {id: 1, name: 'All Tasks'},
      {id: 2, name: 'Another example for now'},
      {id: 3, name: 'Last example'}
    ];

    return listOptions.map((list) => {
      return (
        <option className="top__list-option" key={list.id}>{list.name}</option>
      );
    });
  }

  render() {
    const lists = this._getLists();

    return (
      <select className="top__list-select">
        {lists}
      </select>
    );
  }
}

class BtnAddList extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {

  }

  render() {
    return (
      <button className="top__list-add--btn">Add List</button>
    );
  }
}

class BtnDeleteList extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  _handleClick() {

  }

  render() {
    return (
      <button className="top__list-delete--btn">Delete List</button>
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
        <BtnAddList />
        <BtnDeleteList />
      </div>
    );
  }
}

class TaskInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }

  _handleSubmit(event) {
    // add task and display in list
    console.log('did a submit');
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <button
          className="add-task--btn"
          type="submit"
          onClick={this._handleSubmit}
          ><span>+</span>
        </button>
        <input
          className="add-task--input"
          placeholder="add new task"
          type="text"
          value={this.state.value}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit} />
      </form>
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
          <div className="add-task">
            <div className="add-task__field">
              <TaskInput />
            </div>
          </div>
        </div>
        <Tasks />
      </div>
    );
  }
}

export default App;
