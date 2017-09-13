import React, { Component } from 'react';

import Task from './task';


class TasksList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          description: 'testing1 tasks description',
          date: 'test/date/one',
          list: 'test list1'
        },
        {
          id: 2,
          description: 'test2 description of tasks',
          date: 'second/date/test',
          list: 'test list2'
        }
      ]
    };
  }

  render() {
    const tasks = this.state.tasks.map(function(task) {
      return(
        <Task key={task.id} task={task} />
      );
    });

    return (
      <div className="tasks-list">
        {tasks}
      </div>
    );
  }
}

export default TasksList;