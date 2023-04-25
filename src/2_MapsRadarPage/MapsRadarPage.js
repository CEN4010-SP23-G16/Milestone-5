import React, { useState } from 'react';
import TempMap from '../2_MapsRadarPage/TempMap';
import RainMap from '../2_MapsRadarPage/RainMap';
import WindMap from '../2_MapsRadarPage/WindMap';
import CloudMap from '../2_MapsRadarPage/CloudMap';
import PressureMap from '../2_MapsRadarPage/PressureMap';

export default function MapsAndRadar() {
  const [map, setMap] = useState('map1');

  const renderMap = () => {
    switch (map) {
      case 'tempMap':
        return <TempMap />;
      case 'rainMap':
        return <RainMap />;
      case 'windMap':
        return <WindMap />;
      case 'cloudMap':
        return <CloudMap />;
      case 'pressureMap':
        return <PressureMap />;
      default:
        return <TempMap />;
    }
  };  

  return (
    <>
      <div className="d-flex justify-content-center my-0">
        <button
          className={`btn btn-primary mx-1 ${map === 'tempMap' ? 'active' : ''}`}
          style={{ position: 'absolute', zIndex: '999', bottom: '50px', left: '3px', width: '119px' }}
          onClick={() => setMap('tempMap')}>
          Temperature
        </button>
        
        <button
          className={`btn btn-primary mx-1 ${map === 'rainMap' ? 'active' : ''}`}
          style={{ position: 'absolute', zIndex: '999', bottom: '100px', left: '3px', width: '119px' }}
          onClick={() => setMap('rainMap')}>
          Precipitation
        </button>

        <button
          className={`btn btn-primary mx-1 ${map === 'windMap' ? 'active' : ''}`}
          style={{ position: 'absolute', zIndex: '999', bottom: '150px', left: '3px', width: '119px' }}
          onClick={() => setMap('windMap')}>
          Wind Speed
        </button>

        <button
          className={`btn btn-primary mx-1 ${map === 'cloudMap' ? 'active' : ''}`}
          style={{ position: 'absolute', zIndex: '999', bottom: '200px', left: '3px', width: '119px' }}
          onClick={() => setMap('cloudMap')}>
          Clouds
        </button>

        <button
          className={`btn btn-primary mx-1 ${map === 'pressureMap' ? 'active' : ''}`}
          style={{ position: 'absolute', zIndex: '999', bottom: '250px', left: '3px', width: '119px' }}
          onClick={() => setMap('pressureMap')}>
          Pressure
        </button>
        
      </div>
      {renderMap()}
    </>
  );
}
