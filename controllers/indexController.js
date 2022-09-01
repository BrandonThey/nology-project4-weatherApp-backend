//importing the mysql table model
import {Weather} from "../models/weatherModel.js";

//function that returns weathers by city name
export const getWeatherByName = (req, res) => {
    //when a get request is heard then query the database for any weathers that match the city's name
    const name = req.params.name;
    Weather.findAll({
        where: {
            name: req.params.name,
        }
    })
    .then(weather => { // then return the weather information
        res.status(200).send(weather)
    })
    .catch(err => { //else log the error
        console.log(err);
    })
}

//function that adds new weather information from the react app to the database
export const addWeather = (req,res) => {
    //creating a new database entry based on the model table's columns
    //uses information sent from the react front end
    Weather.create({
        time: req.body.weather.time,
        name: req.body.weather.name,
        weather_main: req.body.weather.weather_main,
        weather_icon: req.body.weather.weather_icon,
        main_temp: req.body.weather.main_temp,
        main_temp_min: req.body.weather.main_temp_min,
        main_temp_max: req.body.weather.main_temp_max,
        main_humidity: req.body.weather.main_humidity,
        visibility: req.body.weather.visibility,
        timezone: req.body.weather.timezone
    })
    .then(() => { //then sends a message to confirm success
        res.status(201).send({message: "Weather added!"})
    })
    .catch(err => { //else log the error
        console.log(err);
    })
}