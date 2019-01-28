
import axios from 'axios';
import cookie from 'react-cookies';


// Fetch All.

export function fetchAll(){
    return (async function(dispatch){
        var token = cookie.load("token");
        var params = {
            token: token
        };
        var response = await axios.get("/api/todos", {
            params: params
        });
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
        var token = cookie.load("token");
        var params = {
            token: token
        };
        var resp = await axios.get('/api/todo/' + id, {params: params});
        dispatch(fetchSucceeded(resp.data));
    });
}

export async function fetchItem(id){
    var token = cookie.load("token");
    var params = {
        token: token
    };
    return (await axios.get('/api/todo/' + id, {params: params})).data;
}




function fetchSucceeded(item){
    return {
        type: "FETCH_TODO_SUCCEEDED",
        payload: {
            item: item,
        }
    }
}


export async function create(item){
    item.status = "Unstarted";
    var token = cookie.load("token");
    var params = {
        token: token,
        item: item, 
    };
    var resp = await axios.post('/api/todo', params);
}

export async function update(id, item){
    var token = cookie.load("token");
    var params = {
        token: token,
        item: item,
    };
    await axios.put('/api/todo/' + id, params);
}

export async function del(id, item){
    var token = cookie.load("token");
    var params = {
        token: token,
    };
    await axios.delete('/api/todo/' + id, {params: params});
}


function createSucceeded(element){
    return {
        type: "CREATE_TODO_SUCCEEDED",
        payload: {
            item: element,
        }
    }
}


