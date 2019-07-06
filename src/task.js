import React from 'react';

const Task = (props) => (
  <li key={props.data.id}>
    <h2>{props.data.title}</h2>
    <p>{props.data.description}</p>
    <p>{props.data.status}</p>
    <p>{props.data.assignee}</p>
  </li>
)

export default Task;
