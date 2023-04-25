import React from 'react';
import { Container } from 'react-bootstrap';
import LocationSearch from '../0_Components/LocationSearch';
import './home.css';

export default function HomePage() {

  return (
    <>
      <div className='background'>

        <Container>
          <div className='logo'></div>

          <div className='divAnimation'>

            <LocationSearch />

            <p>
              ClimateSmart is a beautiful and simple weather application that
              displays the weather information, gives travel and clothing
              recommendations, personalized recommendations weather alerts, and
              more.
            </p>

          </div>
        </Container>
      </div>
    </>
  );
}
