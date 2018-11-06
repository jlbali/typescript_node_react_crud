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

