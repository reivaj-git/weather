import React, { useState } from 'react'

const Weather2 = ({ weather2, temp }) => {

  const [isCelsius, setisCelsius] = useState(true)

  const onChangeUnitTemp = () => setisCelsius(!isCelsius)


  return (
    <section className='text-xl' >
      <h2 className='text-center text-white mb-4 font-bold text-2xl tracking-wider'> {weather2.name}, {weather2.sys.country}</h2>
      
      <section className='grid gap-4 sm:grid-cols-2' >

        <article className=' bg-white/50 hover:bg-white/70 rounded-3xl grid grid-cols-2 justify-items-center justify-center items-center text-center py-2 ' >

          <h3 className='capitalize col-start-1 col-end-3'>{weather2.weather[0].description}</h3>


          <h2 className='text-[45px] font-light' >{isCelsius ? `${temp.celsius} °C ` : `${temp.farengeing} °F`}</h2>


          <div >
            <img className='w-28' src={`https://openweathermap.org/img/wn/${weather2.weather[0].icon}.png`} alt="Icono del Clima" />
          </div>
        </article>


        <article className='bg-white/50 hover:bg-white/70 rounded-3xl grid grid-cols-3 justify-center items-center p-2 sm:grid-cols-1'>

          <div className='flex text-sm justify-center items-center'>
            <div>
              <img src="/images/windBlack.png" alt="" />
            </div>
            <h5>{weather2.wind.speed} m/s</h5>
          </div>

          <div className='flex text-sm justify-center items-center'>
            <div>
              <img src="/images/humidityBlack.png" alt="" />
            </div>
            <h5>{weather2.main.humidity} %</h5>
          </div>

          <div className='flex text-sm justify-center items-center'>
            <div>
              <img src="/images/pressureBlack.png" alt="" />
            </div>
            <h5>{weather2.main.pressure} Hpa</h5>
          </div>

        </article>


      </section>

      <button onClick={onChangeUnitTemp} className='bg-blue-700 block mx-auto py-2 px-6 mt-4 text-white font-bold rounded-full hover:bg-blue-500 duration-200 text-sm'>Change °C/°F</button>

    </section>


  )
}
// 
export default Weather2