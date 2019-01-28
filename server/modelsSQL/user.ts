import * as Sequelize from "sequelize";
import  sql from "../sql";
import Role from "./role";

const User = sql.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.TEXT,

  });

User.belongsTo(Role, {
    foreignkey: 'fk_role',
    targetKey: 'id',
});



export default User;


