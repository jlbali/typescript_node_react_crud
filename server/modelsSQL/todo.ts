import * as Sequelize from "sequelize";
import  sql from "../sql";


const ToDo = sql.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
  });




