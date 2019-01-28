import Model from "../modelsSQL/user";


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
        {
            name: element.name, 
            password: element.password, 
            email: element.email,
            roleId: element.roleId,
        },
        {where: {id:id}}
    );
}

export async function del(id){
    await Model.destroy(
        {where: {id:id}}
    );
}

