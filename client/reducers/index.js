import {combineReducers} from 'redux';
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import todosReducer from './todos';

export default combineReducers({
    //auth: authReducer,
    //users: usersReducer,
    todos: todosReducer,
//    routing: routerReducer,
});




