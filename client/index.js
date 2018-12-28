
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import MainPage from './components/main/MainPage';

import HomePage from './components/home/HomePage';


import ToDosList from './components/todos/ToDosList';
import ToDoForm from './components/todos/ToDoForm';

//import todos from './reducers/todos'; // Llevarlo a un combinador de reducers...
import reducer from './reducers/index.js';
import history from './history';

function RouteNest(props){ 
  return (
    <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />
  )
}

const store = createStore(reducer, applyMiddleware(thunk, logger));


class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Switch>
                <RouteNest  path={'/main'} component={MainPage}>
                    <RouteNest  exact path={'/main/home'} component={HomePage}/>
                    <RouteNest  exact path={'/main/todos'} component={ToDosList}/>
                    <RouteNest  exact path={'/main/todos/create'} component={ToDoForm}/>
                    <RouteNest  exact path={'/main/todos/update/:id'} component={ToDoForm}/>
                </RouteNest>
            </Switch>
        </Router>
      </Provider>
    );
  }
}



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')    
);

