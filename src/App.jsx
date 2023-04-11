import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import './index.css';
import Weather2 from './components/Weather2'
import Loader from './components/Loader'



function App() {
  const [coords, setCoords] = useState()
  const [weather2, setWeather2] = useState()
  const [temp, setTemp] = useState()

  const success = (pos) => {
    const currentCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(currentCoords)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=3cb852dfa93ee0d2a7f5efe20ddccd42`

      axios
        .get(URL)
        .then((res) => {
          setWeather2(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farengeing = (celsius * (9/5) + 32).toFixed(1)

          const newTemps = {
            celsius,
            farengeing
          }
          setTemp(newTemps)
        })
        .catch((err) => console.log(err))
    }
  }, [coords])


  return (
    <div className="App grid place-content-center min-h-screen bg-[url('/images/noche.jpg/')] bg-cover px-2">

      {
        weather2 ? (
          <Weather2 weather2={weather2} temp = {temp} />
        ) : (
          <Loader />
        )

      }

      
    </div>
  )
}

export default App
