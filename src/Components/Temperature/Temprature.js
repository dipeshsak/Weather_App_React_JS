import React, {useEffect, useState} from 'react'
import './Temperature.css'

export default function Temprature(props) {
    const [degree, setDegree] = useState("")
    const [fl, setFl] = useState("")
    const [min,setMin] = useState("")
    const [max, setMax ] = useState("")
    const propData = props.tempdata
    let valfr = propData ? propData.main.temp : "NA"
    let valfl = propData ? propData.main.feels_like : "NA"
    let valmin = propData ? propData.main.temp_min : "NA"
    let valmax = propData ? propData.main.temp_max : "NA"
    console.log("data is",propData)
    const toCelsius = () => {
        setDegree((valfr - 273.15).toFixed(2))
        setFl((valfl - 273.15).toFixed(2))
        setMin((valmin - 273.15).toFixed(2))
        setMax((valmax - 273.15).toFixed(2))
    }

    useEffect(()=>{
        toCelsius()
    })

    return (
        <div className='temperature'>
            <h1>Temperature</h1>
            <h1 style={{fontSize:'54px', margin: 0, color:'orange'}}>{degree}<sup> °</sup>C</h1>
            <div className="fl">Feels Like: {fl}<sup> °</sup>C</div>
            <div className="minmax">
                <div>
                    <h3>Min</h3>
                    <h3 style={{margin:0, color:'green'}}>{min}<sup> °</sup>C</h3>
                </div>
                <div>
                    <h3>Max</h3>
                    <h3 style={{margin:0, color:'red'}}>{max}<sup> °</sup>C</h3>
                </div>
            </div>
        </div>
    )
}
