

import React from 'react';
import ToDo from './ToDo';

const ToDosList = props => {

    return (
        <div className="todo-list">
            <div className="todo-list-title">
                <strong>{props.status}</strong>
            </div>
            {props.todos.map(todo => {
                <ToDo key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default ToDosList;
