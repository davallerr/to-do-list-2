import React, { Component } from 'react';

import './App.css';

import TasksList from './tasks/tasks-list';

const CurrentList = (props) => (
  <h2 className="top__list-current">{props.currentList}</h2>
);

/*
class CurrentList extends Component {
  render() {
    return (
      <h2 className="top__list-current">All Tasks for now</h2>
    );
  }
}
*/

class ListNav extends Component {
  constructor() {
    super();
    this.state = {
      currentList: 'All Tasks for now'
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({currentList: event.target.value});
  }

  render() {
    return(
      <div className="container--top__nav">
        <CurrentList currentList={this.state.currentList} />
        <NavBar />
      </div>
    );
  }
}

class SelectLists extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
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

class BtnAddList extends Component {
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

class BtnDeleteList extends Component {
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

class NavBar extends Component {
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

class TaskInput extends Component {
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


class TaDaApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <h1 className="top__header">Ta-Da List</h1>
          <ListNav />
          <div className="add-task">
            <div className="add-task__field">
              <TaskInput />
            </div>
          </div>
        </div>
        <TasksList />
      </div>
    );
  }
}

export default TaDaApp;
