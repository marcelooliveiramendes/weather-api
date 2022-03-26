import React from 'react';
import './style.css'

function WeatherInfos({props}) {
  return (
      <div className='content'>
          <div className='icon'></div>
          <h1 className='temp'>{props.main.temp.toFixed(1) + '°'}</h1>
          <div className='weatherInfos'>
              <p>{props.weather[0].description}</p>
              <p>Sensação térmica: {props.main.feels_like.toFixed(1) + '°'}</p>
              <p>Humidade: {props.main.humidity + "%"}</p>
          </div>
      </div>
  )
}

export default WeatherInfos;