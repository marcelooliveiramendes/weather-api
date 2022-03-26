
import './App.css';
import { useState } from 'react';

import axios from 'axios';
import { CityInfo } from './components/CityInfos';
import WeatherInfos from './components/WeatherInfos';
import InitialContent from './components/InitialContent';

function App() {
  

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('');

  const API_KEY = '6b8a5bd2aa5ef3f4ac10f6a89731e8f0';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=${API_KEY}&units=metric`


  const searchLocation = (event) => {
      if(event.key === 'Enter'){
        axios.get(url)
          .then((response) => {
              setWeather(response.data)
          })
          .catch((err) => {console.log('Falha na requisição \n\n\n' + err)})
      }
      setLocation('')
  } 

  return (
    <div className="container">
    
      <input
          type='text' 
          className='searchInput'
          onChange={event => setLocation(event.target.value)} 
          onKeyPress={searchLocation}
          placeholder="Enter Location"
      />
  

      {weather.length === 0 &&(
        <InitialContent />
      )}  

      {weather.length !== 0 &&(
        <div className='infoContent'>
          <CityInfo city={weather.name}/>
          <WeatherInfos props={weather}/>
        </div>
      )}
    </div>
  );
}

export default App;
