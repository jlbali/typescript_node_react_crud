import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('sqlite:../todoapp.db');

export default sequelize;
