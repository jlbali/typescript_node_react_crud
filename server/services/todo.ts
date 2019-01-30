import Model from "../modelsSQL/todo";




export async function getAll(){
    return await Model.findAll({raw: true});
}

export async function get(id){
    return await Model.findByPk(id, {raw: true});
}

export async function create(element){
    var newElement = await Model.create(element);
    return newElement;
}

export async function update(id, element){
    await Model.update(
        {title: element.title, description: element.description},
        {where: {id:id}}
    );
}

export async function del(id){
    await Model.destroy(
        {where: {id:id}}
    );
}

export async function reset(){
    await Model.sync({force: true});
}

// Define the other services...

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
