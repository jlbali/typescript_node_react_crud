
import axios from 'axios';

let _id = 1;

export function uniqueId(){
    return _id++;
}


// Fetch All.

export function fetchAll(){
    return (async function(dispatch){
        var resp = await axios.get('/api/todos');
        dispatch(fetchAllSucceeded(resp.data));
    });
}



function fetchAllSucceeded(todos){
    return {
        type: "FETCH_TODOS_SUCCEEDED",
        payload: {
            todos: todos,
        }
    }
}

// Create element.


// Adaptarla a AJAX
export function create(element){
    return (async function(dispatch){
        element.status = "Unstarted";
        var resp = await axios.post('/api/todo', element);
        dispatch(createSucceeded(resp.data));
    });
}


function createSucceeded(element){
    return {
        type: "CREATE_TODO_SUCCEEDED",
        payload: {
            todo: element,
        }
    }
}


