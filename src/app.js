import React, { useState, useEffect, Fragment } from 'react';
import Task from './task.js';
import './app.scss';

function App() {
  const api = `http://taskmaster-env-3.dyim4ppu6d.us-west-2.elasticbeanstalk.com/api`;
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {

    fetch(`${api}/tasks`, {
      mode: 'cors',
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        setTasks(data);
      })
      .catch(err => console.error(err));
  }

  useEffect(getTasks, []);

  return (
    <ul>
      {tasks.map(task => (
        <Task 
          data={task}
          key={task.id}
        />
      ))}
    </ul>
  )
}

export default App;
