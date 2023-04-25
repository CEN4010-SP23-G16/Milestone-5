import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import LocationSearch from '../0_Components/LocationSearch';

export default function Info() {
  const location = useLocation();
  const convertTimeStamp = (timestamp, timezone) => {

    const convertTimezone = timezone / 3600;
    const date = new Date(timestamp * 1000);

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
      hour12: true,
    }
    return date.toLocaleString("en-US", options)
  }

  // convert country code to name
  const convertCountryCode = (country) => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(country)
  }

  return (
    <>
      <Container style={{ display: 'flex'}}>
        <Col md={6}>
          <h1 className='namedate'>{location.state.name}, {convertCountryCode(location.state.sys.country)}</h1>
          <h3 className='namedate' style={{marginTop: '-30px'}}>{convertTimeStamp(location.state.dt, location.state.timezone)}</h3>
        </Col>
        <div style={{ marginLeft: '-135px', marginTop: '10px'}}><LocationSearch location={location} /></div>
        <Col>
            <div className='d-inline-flex'>
              <img
                src={`https://openweathermap.org/img/wn/${location.state.weather[0].icon}.png`}
                alt={location.state.weather[0].main}
                width="100%"
              />
              <h2>Temperature {location.state.main.temp.toFixed()}ºF</h2>
            </div>
          </Col>
      </Container>

      <Container className='weather_card'>
        <Row>
          <Col>
            <h2>Feels like <br></br>{location.state.main.feels_like.toFixed()}ºF</h2>
          </Col>
          <Col>
            <h2>Humidity <br></br> {location.state.main.humidity.toFixed()}%</h2>
          </Col>
          <Col>
            <h2>Wind Speed <br></br> {location.state.wind.speed} m/s</h2>
          </Col>
          <Col>
            <h2>Precipitation <br></br>{location.state.rain ? location.state.rain['1h'] + ' mm' : 'N/A'}</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Forecast</h2>
          </Col>
        </Row>

        <Row className='forecast'>
          <Col>
            <p>Day1</p>
          </Col>
          <Col>
            <p>Day2</p>
          </Col>
          <Col>
            <p>Day3</p>
          </Col>
          <Col>
            <p>Day4</p>
          </Col>
          <Col>
            <p>Day5</p>
          </Col>
        </Row>

      </Container>

    </>
  )
}
