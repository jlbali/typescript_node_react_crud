import axios from 'axios';
import cookie from 'react-cookies';


// Fetch All.

export function fetchAll(){
    return (async function(dispatch){
        var token = cookie.load("token");
        var params = {
            token: token
        };
        var response = await axios.get("/api/roles", {
            params: params
        });
        dispatch(fetchAllSucceeded(response.data));
    });
}


function fetchAllSucceeded(items){
    return {
        type: "FETCH_ROLES_SUCCEEDED",
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
        var resp = await axios.get('/api/role/' + id, {params: params});
        dispatch(fetchSucceeded(resp.data));
    });
}

export async function fetchItem(id){
    var token = cookie.load("token");
    var params = {
        token: token
    };
    return (await axios.get('/api/role/' + id, {params: params})).data;
}




function fetchSucceeded(item){
    return {
        type: "FETCH_ROLE_SUCCEEDED",
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
    var resp = await axios.post('/api/role', params);
}

export async function update(id, item){
    var token = cookie.load("token");
    var params = {
        token: token,
        item: item,
    };
    await axios.put('/api/role/' + id, params);
}

export async function del(id, item){
    var token = cookie.load("token");
    var params = {
        token: token,
    };
    await axios.delete('/api/role/' + id, {params: params});
}


function createSucceeded(element){
    return {
        type: "CREATE_ROLE_SUCCEEDED",
        payload: {
            item: element,
        }
    }
}


