import React from 'react';
import TaskImageUpload from './taskImageUpload';

const api = `http://taskmaster-env-3.dyim4ppu6d.us-west-2.elasticbeanstalk.com/api`;

const Task = (props) => (
  <li key={props.data.id}>
    <h2>{props.data.title}</h2>
    <p>Description: {props.data.description}</p>
    <p>Status: {props.data.status}</p>
    {props.data.assignee ? 
      <p>Assigned To: {props.data.assignee}</p> :
      null
    }
    {props.data.pic ?
      (<div>
        <a href={props.data.pic}>Fullsize image</a>
        <a href={props.data.resizedPic}>Resized image</a>
      </div>) :
      <TaskImageUpload
        api={api}
        id={props.data.id}
      />
    }
  </li>
)

export default Task;
