
import React, {Component} from 'react';
import ToDosList from './ToDosList';
import ToDoForm from './ToDoForm';

const TODO_STATUSES= ['Unstarted', 'In Progress', 'Completed'];

class ToDosPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            showCardForm: false,
        }
    }


    toggleForm(){
        this.setState({
            showCardForm: !this.state.showCardForm,
        });
    }

    renderTodosList(){
        const {todos} = this.props;
        return TODO_STATUSES.map(status => {
            const statusTodos = todos.filter(todo => todo.status === status);
            return <ToDosList key={status} status={status} todos={statusTodos} />
        });
    }

    render(){
        return (
            <div className="todos">
                <div className="todo-list-header">
                    <button
                        className="button button-defauls"
                        onClick={this.toggleForm}
                    >
                      + New ToDo
                    </button>
                </div>
                { this.state.showCardForm && (
                    <ToDoForm />    
                )
                }

                <div className="todo-lists">
                    {this.renderTodosList()}
                </div>
            </div>
        );
    }

}

export default ToDosPage;