import React, { Component } from 'react';
import {connect} from 'react-redux';
import ToDosPage from './ToDosPage';
import {create as createToDo, edit as editToDo, fetchAll as fetchToDos} from '../../actions/todos';


class AppTodos extends Component {
  
  onCreateToDo(todo){
    this.props.dispatch(createToDo(todo));
  }


  componentDidMount(){
    this.props.dispatch(fetchToDos());
  }
  
  render() {
    return (
      <div className="main­content">
        <ToDosPage 
          todos={this.props.todos} 
          creator = {this.onCreateToDo.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos: state.todos,
  }
}



export default connect(mapStateToProps)(AppTodos);


