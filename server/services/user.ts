import Model from "../modelsSQL/user";
import * as AuxObj from "../auxiliars/objectAux";
import * as RoleServices from "./role";

// TODO
// Add role information to the users as extracted from the DB.


export async function getAll(){
    var elements = await Model.findAll({raw: true});
    return elements;
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


///// Extras

// Add the role to the user.
export async function decorateItem(user){
    var newUser = AuxObj.clone(user);
    newUser.role = await RoleServices.get(user.roleId);
    return newUser;
}

// Adds the role to each user in the elements list.
export async function decorateItems(users){
    var newUsers = [];
    for (var i = 0; i < users.length; i++){
        var user = users[i];
        newUsers.push(await decorateItem(user));
    }
    //users.forEach(async function(user){
    //    newUsers.push(await decorateItem(user));
    //});
    return newUsers;
}
