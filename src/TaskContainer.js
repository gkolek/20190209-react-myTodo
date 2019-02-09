import React, { Component } from 'react'

import Task from './Task'

class TaskContainer extends Component {



    render() {
        return (
            <div>
                {this.props.todos.map(task => (
                    <Task 
                    key={`t-${task.id}`} 
                    task = {task}
                    handleChange = {(event)=>this.props.handleChange(event, task.id)}
                    />
                ))}
            </div>
        )
    }
}
export default TaskContainer;