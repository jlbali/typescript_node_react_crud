

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from "../../history";

import ToDosList from './ToDosList';
import {create, fetchItem, update} from '../../actions/todos';


class ToDoForm extends Component {

    constructor(props){
        super(props);
        var id = null;
        if (props.match.params.id){
            id = props.match.params.id;
        }
        this.state = {
            title: '',
            description: '',
            id : id,
        };
    }

    async componentDidMount(){
        if (this.state.id){
            var item = await fetchItem(this.state.id); // HORRIBLE.
            console.log("Item recibido: ", item);
            this.setState({
                title: item.title,
                description: item.description,
            });
        }
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

    async onSubmit(e){
        e.preventDefault();
        if (!this.state.id){
            await create({
                title: this.state.title,
                description: this.state.description,
            });    
        } else {
            await update(this.state.id,{
                title: this.state.title,
                description: this.state.description,                
            });
        }
        history.push("/main/todos");
    }

    cancel(e){
        history.push("/main/todos");
    }


    render(){
        return (
            <form className="todo-form" onSubmit={this.onSubmit.bind(this)}>
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
                <button
                    className="button"
                    onClick={this.cancel.bind(this)}
                >
                    Cancel
                </button>



            </form>
        )
        

    }

}

/*
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        create
    }, dispatch);
}
*/

//export default connect(mapDispatchToProps)(ToDoForm);
export default ToDoForm;