//importing the Sequelize ORM
import { Sequelize } from "sequelize";

//creating a new database connection
export const sequelize = new Sequelize("weathers_db", "root", "password", {
    dialect: "mysql",
    host: "localhost"
})