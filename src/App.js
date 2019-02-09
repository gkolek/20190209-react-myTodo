import React, { Component } from 'react';

import TaskContainer from './TaskContainer'
import CreateTask from './CreateTask'
import FilterContainer from './FilterContainer'


class App extends Component {

  state = {
    day: 'sobota',
    tasks: [
      { id: 101, name: 'Odkurzanie', completed: false },
      { id: 202, name: 'Zakupy', completed: false },
      { id: 303, name: 'ZAKUĆ Reacta', completed: false }
    ]
  }

  updateTask = (taskId, newValue, field) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const task = this.state.tasks[taskIndex];

    task[field] = newValue;

    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    this.setState({ tasks: tasks })

  }

  handleChange = (event, taskId) => {
    console.log('kliknięte', taskId, event.target.checked)
    // const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    // const task = this.state.tasks[taskIndex];

    // task.completed = event.target.checked;

    // const tasks = [...this.state.tasks];
    // tasks[taskIndex] = task;

    // this.setState({ tasks: tasks })
    this.updateTask(taskId, event.target.checked, 'completed')
  }

  updateHandler = (newName, taskId) => {
    // const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    // const task = this.state.tasks[taskIndex];

    // task.name = newName;

    // const tasks = [...this.state.tasks];
    // tasks[taskIndex] = task;
    // this.setState({ tasks: tasks })
      this.updateTask(taskId, newName, 'name')
}

  handleCreate = (name) => {
    const uuId = Math.floor(Math.random() * 1000)
    const tasks = [...this.state.tasks];
    const task = { id: uuId, name, completed: false }
    tasks.push(task);
    this.setState({ tasks: tasks })
  }

  handleRemove = (taskId) => {
    console.log(taskId)
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({ tasks })

  }

  render() {
    return (
      <div>
        <CreateTask createHandler={this.handleCreate} />
        <TaskContainer
          todos={this.state.tasks}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
          updateHandler={this.updateHandler}

        />
      </div>
    );
  }
}

export default App;
