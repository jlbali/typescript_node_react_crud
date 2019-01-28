import * as RoleService from "../services/role";
import * as UserService from "../services/user";


async function test1(){
    var role = await RoleService.get(1);
    console.log("Test 1 Rol JSON: ", role.toJSON);
    console.log("Test 1 Rol: ", role);
    var user = await UserService.get(1);
    console.log("Test 1 User: ", user);
}




test1();
