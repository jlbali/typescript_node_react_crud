import {combineReducers} from 'redux';
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import todosReducer from './todos';
import usersReducer from './users';
import rolesReducer from './roles';

export default combineReducers({
    //auth: authReducer,
    users: usersReducer,
    todos: todosReducer,
    roles: rolesReducer,
//    routing: routerReducer,
});




