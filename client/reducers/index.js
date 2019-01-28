import {combineReducers} from 'redux';
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import todosReducer from './todos';
import usersReducer from './users';

export default combineReducers({
    //auth: authReducer,
    users: usersReducer,
    todos: todosReducer,
//    routing: routerReducer,
});




