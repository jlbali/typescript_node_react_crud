import * as Sequelize from "sequelize";
import  sql from "../sql";


const Role = sql.define('role', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: Sequelize.STRING,
    isAdmin: Sequelize.BOOLEAN,
});

export default Role;

