import User from "../modelsSQL/user";
import * as RoleService from "./role";


export async function authenticate(name, password){
    var query = {
        name: name,
        password: password,
    }
    var user = await User.findOne({where: query, raw: true});
    if (!user){
        return {
            user: null,
            role: null,
            validated: false,
        }
    }
    // We load the Role of the user.
    var role = await RoleService.get(user.roleId);
    //console.log("Rol: ", role);
    return {
        user: user,
        role: role,
        validated: true,
    }    
}

