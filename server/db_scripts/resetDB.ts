

import * as sqlite from 'sqlite3';
import ToDoModel from "../modelsSQL/todo";
import * as ToDoService from "../services/todo";
import RoleModel from "../modelsSQL/role";
import * as RoleService from "../services/role";
import UserModel from "../modelsSQL/user";
import * as UserService from "../services/user";

import config from "../config";


async function reset(){
  const db = await new sqlite.Database(config.db_location);
  console.log("Database creation");

  await ToDoService.reset();
  await UserService.reset();
  await RoleService.reset();
  

  console.log("Sync ToDo....");
  var todo = {
    title: "Starting up...",
    description: "Completion Data... ",
    status: "Unstarted",
  };
  await ToDoService.create(todo);
  console.log("ToDo element added...");

  // Creating Roles.
  var adminRole = await RoleService.create({
    title: "Admin",
    isAdmin: true,
  });
  var userRole = await RoleService.create({
    title: "User",
    isAdmin: false,
  });

  // Creating two basic users.
  await UserService.create({
    name: "admin",
    password: "bla",
    email: "admin@sample.com",
    roleId: adminRole.id,
  });
  await UserService.create({
    name: "pepe",
    password: "ble",
    email: "pepe@sample.com",
    roleId: userRole.id,
  });

}


var process = reset();

process.then(function(){
  console.log("Process complete!");
});


/*
import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

import Role from "../models/role.model";
import User from "../models/user.model";
import ToDo from "../models/todo.model";

import * as RoleService from "../services/role.service";
import * as UserService from "../services/user.service";

async function resetAndPopulate(){
    mongoose.Promise = bluebird;
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/todoapp');
      console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/todoapp`);
      // Limpiando base de datos.
      await ToDo.remove({});
      await User.remove({});
      await Role.remove({});
      // Populando Roles...
      var adminRole = await RoleService.create({
        title: "Administrador",
        isAdmin: true,
      });
      var normalRole = await RoleService.create({
        title: "Usuario",
        isAdmin: false,
      });
      // Populando usuarios.
      var adminUser = await UserService.create({
        username: "admin",
        password: "bla",
        email: "empty@gmail.com",
        id_role: adminRole._id,
      });
    } catch(err){
      console.log("Error: ", err);
      throw Error(err);
    }
}

resetAndPopulate();

*/
