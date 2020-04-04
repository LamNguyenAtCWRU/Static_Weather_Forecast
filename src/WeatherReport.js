import React, {useState} from "react"

const WeatherReport = (props) => {
    const {morning, evening, night, max, min, pressure, humidity, speed, clouds} = props
    const [visible, setVisible] = useState(false)
    const showDetail = () => {
        setVisible(!visible)
    }
    return (
        <div className="mg-top pd d-flex flex-col">
            <div className="m-0 font-sm">
                <div>Pressure: {pressure}</div>
            </div>
            <div className="m-0 font-sm">
                <div>Humidity: {humidity}</div>
            </div>
            <div className="m-0 font-sm">
                <div>Wind speed: {speed}</div>
            </div>
            <div className="m-0 font-sm">
                <div>Clouds: {clouds}</div>
            </div>
            <div className="m-0">
                <h5 className="m-0 border rounded pd" onClick={()=>{showDetail()}}>Temperature Details</h5>
                <div className="d-flex flex-col font-sm" style={{display: visible ? 'block' : 'none'}}>
                    <div>Morning: {morning}</div>
                    <div>Evening: {evening}</div>
                    <div>Night: {night}</div>
                    <div>Max: {max}</div>
                    <div>Min: {min}</div>
                </div>
            </div>
            
        </div>
    )
}

export default WeatherReport