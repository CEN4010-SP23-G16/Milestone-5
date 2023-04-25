import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '../0_Components/SearchBar';
import './home.css';
import { TfiLocationArrow } from "react-icons/tfi";
import { useState } from 'react';
import axios from 'axios'

export default function HomePage() {

    function App() {
        const [data,setData] = useState({})
        const [location, setLocation] = useState('')
        
        const url = "https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={ea2ebba4214c311f36ba1cc2619ed14b}"

        const searchLocation = (event) => {
            if (event.key === "Enter") {

                axios.get(url).then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
                setLocation('')
            }
        }
        return (

            <>
                <div className='background'>
                    <Container>

                        {/* For the image */}
                        <div className='logo'>

                        </div>
                        <div>


                        </div>

                        <div className='search'>
                                <input
                                    value={location} type={text} onchange={event => setLocation(event.target.value)}
                                    placeholder='Enter location' className='fontstyle' onKeyPress={searchLocation}>
                            
                                </input>
                                <TfiLocationArrow className='icon' />

                            <p>
                                ClimateSmart is a beautiful and simple weather application that displays the weather information, gives travel and clothing recommendations, personalized recommendations weather alerts, and more.
                            </p>

                        </div>
                            
                        <div className='location'></div>
                        <div className='temp'></div>
                        <div className='humidity'></div>
                        <div className='wind'></div>


                    </Container>
                </div>
            </>

        )
    }
}