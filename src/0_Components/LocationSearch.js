import React, { useState } from 'react';
import { TfiLocationArrow } from 'react-icons/tfi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LocationSearch() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  const autocomplete = `https://api.openweathermap.org/data/2.5/find?cnt=5&q=${location}&appid=ea2ebba4214c311f36ba1cc2619ed14b`;
  
  const searchLocation = () => {
    if (!location) {
      setErrorMessage('* Please enter a city *');
      return;
    }
    axios.all([axios.get(url), axios.get(forecastUrl)])
    .then(axios.spread((weatherResponse, forecastResponse) => {
      console.log('Weather data from API:', weatherResponse.data);
      console.log('Forecast data from API:', forecastResponse.data);
      navigate(`/weather?location=${location}`, { state: { weather: weatherResponse.data, forecast: forecastResponse.data } });
    }));
  setLocation('');
};

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  const handleAutocomplete = () => {
    axios.get(autocomplete)
      .then((response) => {
        setSuggestions(response.data.list);
      });
  };

  return (
    <>
      <p className='entercity'></p>
      <input
        type='text'
        placeholder='Enter location'
        className='fontstyle searchbox'
        onChange={(event) => { setLocation(event.target.value); handleAutocomplete(); }}

        value={location}
        onKeyDown={handleKeyPress}
      />

      <button
        className='searchButton'
        onClick={searchLocation}
      >
        <TfiLocationArrow className='icon' />
      </button>

    <div className='errormsg'>{errorMessage}</div>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <ul key={suggestion.id} onClick={() => {
              setLocation(suggestion.name);
              setSuggestions([]);
            }}>
              {suggestion.name}, {suggestion.sys.country}
            </ul>
          ))}
        </ul>
      )}
    </>
  )
}
