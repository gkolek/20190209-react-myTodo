import React, { Component } from 'react'

class Task extends Component {

    render() {
        const styles = this.props.task.completed
            ? { textDecoration: 'line-through' }
            : {};
        return (
            <div style={styles}>
                <input
                    type="checkbox"
                    checked={this.props.task.completed}
                    onChange={this.props.handleChange}
                />
                {this.props.task.name}
                <button onClick={this.props.handleRemove}>x</button>
            </div>
        )
    }
}
export default Task;