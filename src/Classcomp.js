import React from 'react'
import axios from 'axios'
import Inputselect from './Components/Inputselect/Inputselect'
import Weather from './Components/Weather/Weather'
import Temperature from './Components/Temperature/Temprature'
import Wind from './Components/Wind/Wind'
import './Classcomp.css'

class Classcomp extends React.Component{
    state={
          city:"Mumbai",
          cityData:""
          }
    componentDidMount(){
        console.log("cdm is called")
        this.weatherapicall()
    }
    weatherapicall=()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=0ce8b91ed909db0dd51635c8edae12c5`)
        .then(res=>{
            console.log("**DATA**",res)
            this.setState({cityData:res.data})
        })
    }
    handleCity = (userval) => {
        this.setState({city:userval})
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.city !== this.state.city){
            this.weatherapicall()
        }
    }
    render(){
        // this.weatherapicall()
        return(
            <div style={{height:'100%'}}>
                <Inputselect handleCity={this.handleCity}/>
                <div className='bottompanel'>
                    <Weather weatherdata={this.state.cityData} />
                    <Temperature tempdata={this.state.cityData} />
                    <Wind winddata={this.state.cityData} />
                </div>
            </div>
        )
    }
}

export default Classcomp