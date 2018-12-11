
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import MainPage from './components/main/MainPage';
import AppTodos from './components/todos/AppTodos';
import HomePage from './components/home/HomePage';


import todos from './reducers/todos'; // Llevarlo a un combinador de reducers...
import history from './history';

function RouteNest(props){ 
  return (
    <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />
  )
}

const store = createStore(todos, applyMiddleware(thunk, logger));


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
              <RouteNest  path={'/main'} component={MainPage}>
                  <RouteNest  exact path={'/main/home'} component={HomePage}/>
              </RouteNest>
          </Switch>
      </Router>
    );
  }
}



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')    
);

