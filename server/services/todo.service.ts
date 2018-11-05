import ToDo from "../modelsSQL/todo";


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
    return await ToDo.findAll();
}

export async function get(id){
    return await ToDo.findById(id);
}


// Define the other services...

