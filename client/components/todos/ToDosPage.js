
import React, {Component} from 'react';
import ToDosList from './ToDosList';

const TODO_STATUSES= ['Unstarted', 'In Progress', 'Completed'];

class ToDosPage extends Component {

    renderTodoList(){
        const {todos} = this.props;
        return TODO_STATUSES.map(status => {
            const statusTodos = todos.filter(todo => todo.status === status);
            return <ToDosList key={status} status={status} todos={statusTodos} />
        });
    }

    render(){
        return (
            <div className="todos">
                <div className="todo-lists">
                    {this.renderTodoList()}
                </div>
            </div>
        );
    }

}

export default ToDosPage;