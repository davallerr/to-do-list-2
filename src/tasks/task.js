import React from 'react';
import PropTypes from 'prop-types';

export default function Task({task}) {
  return (
    <div className="task">
      <div className="task__description">{task.description}</div>
      <div className="task__date">{task.date}</div>
      <div className="task__delete"><button className="task__delete--btn">delete</button></div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}