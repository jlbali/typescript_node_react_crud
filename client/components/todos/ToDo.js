
import React from 'react';

const ToDo = props => {
    return (
        <div className="todo">
            <div className="todo-header">
                <div>{props.todo.title} </div>
            </div>
            <hr />
            <div className="todo-body">{props.todo.description}</div>
        </div>
    )


}

export default ToDo;

