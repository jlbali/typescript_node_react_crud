import Model from "../modelsSQL/role";




export async function getAll(){
    return await Model.findAll();
}

export async function get(id){
    return await Model.findById(id);
}

export async function create(element){
    var newElement = await Model.create(element);
    return newElement;
}

export async function update(id, element){
    await Model.update(
        {title: element.title, isAdmin: element.isAdmin},
        {where: {id:id}}
    );
}

export async function del(id){
    await Model.destroy(
        {where: {id:id}}
    );
}

