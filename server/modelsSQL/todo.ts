import * as Sequelize from "sequelize";
import  sql from "../sql";


const ToDo = sql.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
  });

export default ToDo;


