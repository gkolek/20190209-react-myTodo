import React from 'react'

import Task from './Task'

const TaskContainer = (props) => (

    <div>
        {props.todos.map(task => (
            <Task
                key={`t-${task.id}`}
                task={task}
                handleChange={(event) => props.handleChange(event, task.id)}
                handleRemove={() => props.handleRemove(task.id)}
                updateHandler={(newName)=> props.updateHandler(newName, task.id)}
            />
        ))}
    </div>
)
export default TaskContainer;