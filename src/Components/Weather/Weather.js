import React from 'react'
import './Weather.css'

export default function Weather(props) {
    // console.log("Weather",props.weatherdata.weather[0].main);
    const propData = props.weatherdata
    return (
        <div className='weather'>
            <h1>Weather</h1>
            <h3>Main: {propData ? propData.weather[0].main : "NA"}</h3>
            <h3>Description: {propData ? propData.weather[0].description : "NA"}</h3>
            <h3>Pressure: {propData ? propData.main.pressure : "NA"}</h3>
            <h3>Humidity: {propData ? propData.main.humidity : "NA"}</h3>
        </div>
    )
}
