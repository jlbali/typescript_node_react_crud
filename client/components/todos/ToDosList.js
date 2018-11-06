

import React from 'react';
import ToDo from './ToDo';

const ToDosList = props => {
    return (
        <div className="todo-list">
            <div className="todo-list-title">
                <strong>{props.status}</strong>
            </div>
            <div className="todo-list-body">
                {props.todos.map(todo => (
                    <ToDo key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default ToDosList;
