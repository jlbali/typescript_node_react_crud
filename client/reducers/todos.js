
export default function todos(state={todos: []}, action){

  if (action.type == "FETCH_TODOS_SUCCEEDED"){
    return {
      todos: action.payload.todos,
    };
  }
  if (action.type == "CREATE_TODO_SUCCEEDED"){
    return {
      todos: state.todos.concat(action.payload.todo),
    };
  }
  if (action.type == "EDIT_TODO"){
    const {payload} = action;
    return {
      todos: state.todos.map(todo => {
        if (todo.id == payload.id){
          return Object.assign({}, todo, payload.params);
        } else {
          return todo;
        }
      }),
    };
  }

  return state;
}



/*
import {uniqueId} from '../actions/todos';

const mockToDos = [                               
    {
      id: uniqueId(),
      title: 'Learn Redux',
      description: 'The store, actions, and reducers, oh my!',
      status: 'In Progress',
    },
    {
      id: uniqueId(),
      title: 'Peace on Earth',
      description: 'No big deal.',
      status: 'In Progress',
    },
  ];
  


export default function todos(state={todos: mockToDos}, action){
  
  if (action.type == 'CREATE_TODO'){
    return {
      todos: state.todos.concat(action.payload),
    }
  }

  return state;
}

*/