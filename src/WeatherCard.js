import React from "react"
import moment from "moment"
import WeatherReport from "./WeatherReport"

const WeatherCard = (props) => {
    const {dateTime, sunrise, sunset, icon, main, description, temp, feelsTemp} = props
    const {morning, evening, night, min, max,pressure, humidity,speed,clouds} = props
    // console.log(moment(dateTime*1000).format("ddd, DD"))
    return (
        <div className="mg pd border rounded flex-col cursor-pointer">
            <h4 className="m-0">{moment(dateTime*1000).format("dddd, DD")}</h4>
            <div className="m-0 font-sm italic">sunrise: {moment(sunrise*1000).format("LTS")}</div>
            <div className="m-0 font-sm italic">sunset: {moment(sunset*1000).format("LTS")}</div>
            <img src= {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            {/* khi nào cần dùng {}?  */}
            <div className="font-sm">{main}</div>
            <div className="font-sm italic">{description}</div>
            <div className="d-flex mg-top">
                <span className="flex-grow-1 font-lg">{temp}</span>
                <span className="font-sm">{feelsTemp}</span>
            </div>
            <div><WeatherReport
                morning={morning}
                evening={evening}
                night={night}
                min={min}
                max={max}
                pressure={pressure}
                humidity={humidity}
                speed={speed}
                clouds={clouds}
            /></div>
        </div>
    )
}


export default WeatherCard