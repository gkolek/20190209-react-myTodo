import React, { Component } from 'react'

import Task from './Task'

class TaskContainer extends Component {

    state = {
        day: 'sobota',
        tasks: [
            { id: 101, name: 'Odkurzanie', completed: true },
            { id: 202, name: 'Zakupy', completed: true },
            { id: 303, name: 'ZAKUĆ Reacta', completed: false }
        ]
    }

    handleChange = (event, taskId) => {
        console.log('kliknięte', taskId);

        console.log(event.target.checked)
    }


    render() {
        return (
            <div>
                {/* <Task fafik="Odkurzanie" />
                <Task fafik="Zakupy" />
                <Task fafik="ZAKUĆ Reacta" />
                <p /> */}
                {this.state.tasks.map(task => (
                    <Task 
                    key={`t-${task.id}`} 
                    task = {task}
                    handleChange = {(event)=>this.handleChange(event, task.id)}
                    />
                ))}
            </div>
        )
    }
}
export default TaskContainer;