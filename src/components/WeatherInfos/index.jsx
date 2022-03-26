import React from 'react';

function WeatherInfos({props}) {
  return (
      <div>
          <div className='icon'></div>
          <h1>{props.main.temp.toFixed(1) + '°'}</h1>
          <div>
              <p>{props.weather[0].description}</p>
              <p>Sensação térmica: {props.main.feels_like.toFixed(1) + '°'}</p>
              <p>Humidade: {props.main.humidity + "%"}</p>
          </div>
      </div>
  )
}

export default WeatherInfos;