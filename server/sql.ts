import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('sqlite:todo.db');


export default sequelize;
