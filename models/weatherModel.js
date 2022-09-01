//importing the Sequelize ORM and sequelize, the database instance,
import { Sequelize } from "sequelize";
import {sequelize} from "../db/index.js";

//creating a database model to store weather information
export const Weather = sequelize.define("weathers", {
    id: { //id is the primary key and autoincrements
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    
    time: { //time is the time/date string of the city 
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    name: { //name of the city
        type: Sequelize.STRING,
        allowNull: false,
    },

    weather_main: { //main heading of the weather conditions
        type: Sequelize.STRING,
        allowNull: false,
    },
    weather_icon: { //weather icon image
        type: Sequelize.STRING,
        allowNull: true,
    },
    main_temp: { //current temperature of the city
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    main_temp_min: { //min temp of the day for the city
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    main_temp_max: { //max temp of the day for the city
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    main_humidity: { //humidity of the day for the city
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    visibility: { //visibility of the day for the city
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    timezone:{ //city's timezone offset from UTC
        type: Sequelize.INTEGER,
        allowNull: false,
    },

})