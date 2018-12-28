
export default function todosReducer(state={items: []}, action){

  if (action.type == "FETCH_TODOS_SUCCEEDED"){
    return {
      items: action.payload.items,
    };
  }
  if (action.type == "FETCH_TODO_SUCCEEDED"){
    return {
      item: action.payload.item,
    };
  }
  if (action.type == "CREATE_TODO_SUCCEEDED"){
    return {
      items: state.items.concat(action.payload.item),
    };
  }
  if (action.type == "EDIT_TODO"){
    const {payload} = action;
    return {
      items: state.items.map(item => {
        if (item.id == payload.id){
          return Object.assign({}, item, payload.params);
        } else {
          return item;
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