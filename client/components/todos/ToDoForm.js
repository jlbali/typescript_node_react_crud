

import React, {Component} from 'react';
import ToDosList from './ToDosList';


class ToDoForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
        };
    }

    onTitleChange(e){
        this.setState({
            title: e.target.value,
        });
    }

    onDescriptionChange(e){
        this.setState({
            description: e.target.value,
        });
    }

    resetForm(){
        this.setState({
            title: '',
            description: '',
        });
    }

    onCreateTodo(e){
        e.preventDefault();
        this.props.creator({
            title: this.state.title,
            description: this.state.description,
        });
        this.resetForm();
    }

    render(){
        return (
            <form className="todo-form" onSubmit={this.onCreateTodo.bind(this)}>
                <input
                    className="full-width-input"
                    onChange={this.onTitleChange.bind(this)}
                    value= {this.state.title}
                    type="text"
                    placeholder="title"
                />
                <input
                    className="full-width-input"
                    onChange={this.onDescriptionChange.bind(this)}
                    value= {this.state.description}
                    type="text"
                    placeholder="description"
                />
                <button
                    className="button"
                    type="submit"
                >
                    Save
                </button>
                
            </form>
        )
        

    }

}


export default ToDoForm;