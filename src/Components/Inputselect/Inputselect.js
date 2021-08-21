import React, {useState} from 'react'
import './Inputselect.css'

export default function Inputselect(props) {
    const [userval, setUserval] = useState("")
    const handleUserCityInput = (e) => {
        console.log("**e**",e.target.value)
        setUserval(e.target.value)
    }
    const handleClear = (e) => {
        setUserval("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("**props**",props)
        props.handleCity(userval)
    }
    return (
        <div className='inputselect'>
            <form onSubmit={handleSubmit}>
                <input type='text' value={userval} onChange={handleUserCityInput}/>
                <button className="btn" onClick={handleClear}>🗙</button>
                <button className="btngn">Get Now!</button>
            </form>
        </div>
    )
}
