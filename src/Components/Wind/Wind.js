import React from 'react'
import './Wind.css'

export default function Wind(props) {
    const propData = props.winddata
    return (
        <div className='wind'>
            <h1>Wind</h1>
            <h3>Wind Speed: {propData ? propData.wind.speed : "NA"}</h3>
            <h3>Country: {propData ? propData.sys.country : "NA"}</h3>
            <h3>Sunrise: {propData ? propData.sys.sunrise : "NA"}</h3>
            <h3>Sunset: {propData ? propData.sys.sunset : "NA"}</h3>
        </div>
    )
}
