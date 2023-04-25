import React from 'react';
import { useLocation } from 'react-router';
import { Container } from 'react-bootstrap';
import './weather.css';
import LocationSearch from '../0_Components/LocationSearch';
import Info from './Info';

  const WeatherPage = () => {
  const location = useLocation();

  return (
    <div className='bgweather'>
      <div>
        <Container>
          <div className='divAnimation'>
            {location.state ? (
              <Info />
            ) :
              <>
                <LocationSearch location={location} />
              </>
            }
          </div>

        </Container>
      </div>
    </div>
  );
}

export default WeatherPage;
