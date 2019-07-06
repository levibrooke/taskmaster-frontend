import React from 'react';

const Task = (props) => (
  <li key={props.data.id}>
    <h2>{props.data.title}</h2>
    <p>Description: {props.data.description}</p>
    <p>Status: {props.data.status}</p>
    {props.data.assignee ? 
      <p>Assigned To: {props.data.assignee}</p> :
      null
    }
  </li>
)

export default Task;
