//importing all neccessary libraries
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {sequelize} from "./db/index.js";
//importing functions from the controller
import { getWeatherByName, addWeather } from "./controllers/indexController.js";

//initializing the app and port
const app = express();
const port = 3030;
//setting cors permissions for localhost authentication
const corsReq = cors;
app.use(corsReq());

//syncing the api to the mysql database
sequelize.sync({force: true})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })

//using bodyparser to parse json inputs
app.use(bodyParser.json());
//starting up the app and listening on the port
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

//app routes for get and post requests from the front end react app
//get requests are followed by the city's name in order to return weather of that city
app.get("/api/weathers/:name", getWeatherByName)
app.post("/api/addWeather", addWeather)