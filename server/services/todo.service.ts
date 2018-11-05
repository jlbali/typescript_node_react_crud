import Model from "../modelsSQL/todo";


/*
export async function getQueryTodos(query){
    try{
        var todos = await ToDo.find(query);
        return todos;
    } catch(e){
        console.log("Error! : ", e);
        throw Error("Error al obtener getQueryTodos");
    }
}

*/


export async function getAll(){
    return await Model.findAll();
}

export async function get(id){
    return await Model.findById(id);
}

export async function create(element){
    var newElement = Model.create(element);
    return newElement;
}

// Falta update y delete.





// Define the other services...

