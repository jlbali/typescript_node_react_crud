import * as Sequelize from 'sequelize';
import config from './config';


const sequelize = new Sequelize('sqlite:' + config.db_location);

export default sequelize;
