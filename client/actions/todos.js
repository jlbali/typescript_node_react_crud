
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



function fetchAllSucceeded(items){
    return {
        type: "FETCH_TODOS_SUCCEEDED",
        payload: {
            items: items,
        }
    }
}

// Fetch element
export function fetch(id){
    return (async function(dispatch){
        var resp = await axios.get('/api/todo/' + id);
        dispatch(fetchSucceeded(resp.data));
    });
}

export async function fetchItem(id){
    return (await axios.get('/api/todo/' + id)).data;
}




function fetchSucceeded(item){
    return {
        type: "FETCH_TODO_SUCCEEDED",
        payload: {
            item: item,
        }
    }
}



// Create element.
/*
export function create(element){
    return (async function(dispatch){
        element.status = "Unstarted";
        var resp = await axios.post('/api/todo', element);
        dispatch(createSucceeded(resp.data));
        // Feo que esto este aqui.
        history.push("/main/todos");
    });
}
*/

export async function create(item){
    item.status = "Unstarted";
    var resp = await axios.post('/api/todo', {item: item});
    //dispatch(createSucceeded(resp.data));
    // Feo que esto este aqui.
    //history.push("/main/todos");
}

export async function update(id, item){
    await axios.put('/api/todo/' + id, {item: item});
}

export async function del(id, item){
    await axios.delete('/api/todo/' + id);
}


function createSucceeded(element){
    return {
        type: "CREATE_TODO_SUCCEEDED",
        payload: {
            item: element,
        }
    }
}


