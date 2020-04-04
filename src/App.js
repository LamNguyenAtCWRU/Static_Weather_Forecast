import React, {useState, useEffect} from 'react'
import WeatherCard from "./WeatherCard.js"

const fetchWeatherData = async () => {
  const res = await fetch("https://api.openweathermap.org/data/2.5/forecast/daily?id=1581129&APPID=f5021250979d6a49f4005170d1cf82a3&units=metric")
  const resJson = await res.json()
  const data = resJson
  return data
}

const App = () => {

  const [city, setCity] = useState({})
  const [daily, setDaily] = useState([])
  useEffect(() => {
    fetchWeatherData().then(data => {
      setCity(data.city)
      setDaily(data.list)
      console.log(data.city)
      console.log(data.list)
    })
  }, [])
  
  return (
    <div>
      <h1>Weather Forecast</h1>
      <p>
        Location:
        <b>
          {city.name}, {city.country}
        </b>
      </p>
      <div className="d-flex">
        {daily.map((day) => (
          <WeatherCard
            className="mg"
            dateTime={day.dt}
            sunrise={day.sunrise}
            sunset={day.sunset}
            icon={day.weather[0].icon}
            main={day.weather[0].main}
            description={day.weather[0].description}
            temp={Math.ceil(day.temp.day)}
            feelsTemp={Math.floor(day.feels_like.day)}
            morning={day.temp.morn}
            evening={day.temp.eve}
            night={day.temp.night}
            max={day.temp.max}
            min={day.temp.min}
            pressure={day.pressure}
            humidity={day.humidity}
            speed={day.speed}
            clouds={day.clouds}
          />
        ))}
      </div>
    </div>
  )
}


export default App
