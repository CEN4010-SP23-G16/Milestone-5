import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapsRadar.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVoYWQzOTIiLCJhIjoiY2xnOGh2Z200MGc4eTNsbmJ4bzk2b3ViayJ9.dxzPL3F1mQsRYs8_35d_fA';
const API_KEY = 'ea2ebba4214c311f36ba1cc2619ed14b';

export default function MapsRadarPage() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10', //v11 is globe
      center: [-98, 38],
      zoom: 3.5,
    });

    setMap(newMap);

    return () => newMap.remove();
  }, []);

  useEffect(() => {
    if (!map) return;

    const getWeatherData = async () => {
      //const response = await fetch(`https://api.openweathermap.org/data/2.5/box/city?bbox=-180,-90,180,90&appid=${API_KEY}`); // to get temp across the globe
      const response = await fetch(`https://api.openweathermap.org/data/2.5/box/city?bbox=-96.8466%2C37.0905747%2C-92.5829684%2C41.7686%2C9&appid=${API_KEY}`);

      const data = await response.json();
      console.log(data);

      const windLayer = {
        id: 'wind-layer',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [
            `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`
          ],
          tileSize: 256,
          attribution:
            'Map data © OpenWeatherMap'
        }
      };
      map.addLayer(windLayer);
    };

    getWeatherData();
  }, [map]);

  return (
    <div id="map" className='weathermaps'/>
  );
}
