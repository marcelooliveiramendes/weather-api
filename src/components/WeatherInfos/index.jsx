import React from 'react';
import './style.css'

function WeatherInfos({props}) {
  return (
        <div className='content'>
            <div className='icon'></div>
            <h1 className='temp'>{props.main.temp.toFixed(0) + '°'}</h1>
            
            <span className='description'>{props.weather[0].description}</span>
              
            <p>Sensação térmica: {props.main.feels_like.toFixed(0) + '°'}</p>
            <p>Humidade: {props.main.humidity + "%"}</p>
        </div>
  )
}

export default WeatherInfos;