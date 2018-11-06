import React, { Component } from 'react';
import {connect} from 'react-redux';
import ToDosPage from './components/todos/ToDosPage';



class App extends Component {
  render() {
    return (
      <div className="main­content">
        <ToDosPage todos={this.props.todos} />
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


