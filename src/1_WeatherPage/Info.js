import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router';
import LocationSearch from '../0_Components/LocationSearch';
import { BsCloudSunFill, BsCloudMoonFill, BsCloudsFill, BsCloudRainFill, BsFillCloudLightningRainFill, BsCloudHaze2, BsSnow } from "react-icons/bs"

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
      <Container style={{ display: 'flex' }}>
        <Col md={6}>
          <h1 className='namedate'>{location.state.weather.name}, {convertCountryCode(location.state.weather.sys.country)}</h1>
          <h3 className='namedate' style={{ marginTop: '-30px' }}>{convertTimeStamp(location.state.weather.dt, location.state.weather.timezone)}</h3>
        </Col>
        <div style={{ marginLeft: '-147px', marginTop: '10px' }}><LocationSearch location={location} /></div>
      
        <Col>
          <div className='weathericon'>
            {location.state.weather.weather[0].icon === "01d" ? <BsCloudSunFill /> :
            location.state.weather.weather[0].icon === "01n" || location.state.weather.weather[0].icon === "02n" || location.state.weather.weather[0].icon === "03n" || location.state.weather.weather[0].icon === "04n" ? <BsCloudMoonFill /> :
            location.state.weather.weather[0].icon === "02d" || location.state.weather.weather[0].icon === "03d" || location.state.weather.weather[0].icon === "04d" ? <BsCloudsFill /> :
            location.state.weather.weather[0].icon === "09d" || location.state.weather.weather[0].icon === "09n" || location.state.weather.weather[0].icon === "10d" || location.state.weather.weather[0].icon === "10n" ? <BsCloudRainFill /> :
            location.state.weather.weather[0].icon === "11d" || location.state.weather.weather[0].icon === "11n" ? <BsFillCloudLightningRainFill /> :
            location.state.weather.weather[0].icon === "50d" || location.state.weather.weather[0].icon === "50n" ? <BsCloudHaze2 /> :
            location.state.weather.weather[0].icon === "13d" || location.state.weather.weather[0].icon === "13n" ? <BsSnow /> : null}
            <h2 style={{ display: 'inline-block', marginLeft: '10px' }}> {location.state.weather.main.temp.toFixed()}&deg;F</h2>
          </div>
        </Col>
      </Container>

      <Container className='weather_card'>
        <div>
          <br></br>
        </div>
        <Row>
          <Col className='weather_column'>
            <h4>Feels like<br></br>{location.state.weather.main.feels_like.toFixed()}&deg;F</h4>
          </Col>
          <Col className='weather_column'>
            <h4>Humidity<br></br>{location.state.weather.main.humidity.toFixed()}%</h4>
          </Col>
          <Col className='weather_column'>
            <h4>Wind Speed<br></br>{location.state.weather.wind.speed} m/s</h4>
          </Col>
          <Col className='weather_column'>
            <h4>Precipitation<br></br>{location.state.weather.rain ? location.state.weather.rain['1h'] + ' mm' : 'N/A'}</h4>
          </Col>
          
        </Row>
      </Container>

      <Row>
        <Col>
          <h2 style={{ marginBottom: '15px'}}><hr></hr>5-Day Forecast</h2>
        </Col>
      </Row>

      <Container>
        <Row className='forecast'>
  {location.state.forecast.list
    .filter((data) => data.dt_txt.includes('12:00:00'))
    .slice(0, 5)
    .map((data) => {
      let temps = location.state.forecast.list.filter((item) => {
        return item.dt_txt.includes(data.dt_txt.substr(0, 10))
      }).map((item) => item.main.temp)

      let maxTemp = Math.max(...temps).toFixed()
      let minTemp = Math.min(...temps).toFixed()

      return (
        <Col key={data.dt}>
          <div>
            <h3>
              {new Date(data.dt_txt).toLocaleDateString(undefined, { weekday: 'short' })}
              <br></br>
              {data.weather[0].icon === "01d" ? <BsCloudSunFill /> :
              data.weather[0].icon === "01n" || data.weather[0].icon === "02n" || data.weather[0].icon === "03n" || data.weather[0].icon === "04n" ? <BsCloudMoonFill /> :
              data.weather[0].icon === "02d" || data.weather[0].icon === "03d" || data.weather[0].icon === "04d" ? <BsCloudsFill /> :
              data.weather[0].icon === "09d" || data.weather[0].icon === "09n" || data.weather[0].icon === "10d" || data.weather[0].icon === "10n" ? <BsCloudRainFill /> :
              data.weather[0].icon === "11d" || data.weather[0].icon === "11n" ? <BsFillCloudLightningRainFill /> :
              data.weather[0].icon === "50d" || data.weather[0].icon === "50n" ? <BsCloudHaze2 /> :
              data.weather[0].icon === "13d" || data.weather[0].icon === "13n" ? <BsSnow /> : null}
              <br></br>
              <p>Max: {maxTemp}&deg;F<br></br>Min: {minTemp}&deg;F</p>
            </h3>
          </div>
        </Col>
      )
    })}
</Row>


      </Container>
    </>
  )
}
