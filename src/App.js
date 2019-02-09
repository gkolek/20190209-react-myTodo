import React, { Component } from 'react';

import TaskContainer from './TaskContainer'
import  CreateTask from './CreateTask'


class App extends Component {

  state = {
    day: 'sobota',
    tasks: [
        { id: 101, name: 'Odkurzanie', completed: false },
        { id: 202, name: 'Zakupy', completed: false },
        { id: 303, name: 'ZAKUĆ Reacta', completed: false }
    ]
}

handleChange = (event, taskId) => {
  console.log('kliknięte', taskId, event.target.checked)
  const taskIndex = this.state.tasks.findIndex(task=> task.id ===taskId);
  const task = this.state.tasks[taskIndex];

  task.completed = event.target.checked;

  const tasks = [...this.state.tasks];
  tasks[taskIndex] = task;

  this.setState({tasks:tasks})
}



  render() {
    return (
      <div>
        <TaskContainer 
        todos={this.state.tasks}
        handleChange = {this.handleChange}

        />
      </div>
    );
  }
}

export default App;
