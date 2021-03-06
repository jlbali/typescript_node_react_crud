import * as express from 'express';
import * as bluebird from 'bluebird';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

import * as sequelize from './sql';
//const Sequelize = require('sequelize');

import * as TodoController from './controllers/todo';
import * as LoginController from './controllers/login';
import * as UserController from './controllers/user';
import * as RoleController from './controllers/role';

class App {
  public express;
  private sequelize;


  constructor(){
    this.express = express();
    this.enableCors();
    this.enablePublic();
    this.mountDefaultRoutes();
    this.mountRoutesAuthentication();
    this.tokenValidationMiddleware();
    this.mountRoutesTodos();
    this.mountRoutesUsers();
    this.mountRoutesRoles();
  
  }

  private enableCors(): void {
    this.express.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:4200");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      next();
    });
  }

  private enablePublic(): void{
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(express.static('dist_client'));

  }

  // Version con Async, que queda algo mas elegante.
  private async enableMongoose() {
    mongoose.Promise = bluebird;
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/todoapp');
      console.log(`Succesfully Connected to the
        Mongodb Database  at URL : mongodb://127.0.0.1:27017/todoapp`);
    } catch(err){
      console.log("Error: ", err);
      console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/todoapp`);
    }
  }


  private mountDefaultRoutes(): void {
    this.express.get('/', (req, res) => {
      console.log("Redireccionando a login...");
      res.redirect("/main.html#/login");
    });
    this.express.get('/hello', (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });
  }

  private mountRoutesAuthentication(): void {
    this.express.post("/api/authenticate", LoginController.authenticate);
  }

  private tokenValidationMiddleware(){
    this.express.use(LoginController.validateToken);
  }


  private mountRoutesTodos(): void {
    this.express.get("/api/todos", TodoController.getAll);
    this.express.get("/api/todo/:id", TodoController.get);
    this.express.post("/api/todo", TodoController.create);
    this.express.put("/api/todo/:id", TodoController.update);
    this.express.delete("/api/todo/:id", TodoController.del);
  }

  private mountRoutesUsers(): void {
    this.express.get("/api/users", UserController.getAll);
    this.express.get("/api/user/:id", UserController.get);
    this.express.post("/api/user", UserController.create);
    this.express.put("/api/user/:id", UserController.update);
    this.express.delete("/api/user/:id", UserController.del);
  }

  private mountRoutesRoles(): void{
    this.express.get("/api/roles", RoleController.getAll);
  }


  public async listen(port:number) {
    await this.express.listen(port);
    console.log("Servidor activo en puerto " + port);
  }

}

export default App;
