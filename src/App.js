import Header from './0_Components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './0_HomePage/HomePage';
import WeatherPage from './1_WeatherPage/WeatherPage';
import MapsRadarPage from './2_MapsRadarPage/MapsRadarPage';
import AlertPage from './3_AlertPage/AlertPage';
import LoginSection from './0_Components/LoginSection';
import SignUpSection from './4_SignUpPage/SignUpSection';
import UserSetting from './UserSettings/UserSetting';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/weather' element={<WeatherPage/>}/>
        <Route path='/maps-radar' element={<MapsRadarPage/>}/>
        <Route path='/maps-radar/temperature-map' element={<MapsRadarPage/>}/>
        <Route path='/alerts' element={<AlertPage />} />
        <Route path='/settings' element={<UserSetting />} />
        <Route path='/signUpUser' element={ <SignUpSection/>} />
        <Route path='/loginpage' element={<LoginSection/>}/>
      </Routes>
    </>
  );
}

export default App;
