import React, { Component } from 'react';
import {connect} from 'react-redux';
import ToDosPage from './components/todos/ToDosPage';



class App extends Component {
  
  onCreateToDo(todo){
    this.props.dispatch({
      type: "CREATE_TODO",
      payload: todo
    });
  }

  
  render() {
    return (
      <div className="main­content">
        <ToDosPage todos={this.props.todos} 
        creator = {this.onCreateToDo.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos: state.todos,
  }
}



export default connect(mapStateToProps)(App);


