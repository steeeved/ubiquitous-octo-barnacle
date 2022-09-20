import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


import { Navbar } from './Elements';
import { Home, About, Weather } from './Pages';
import { ILongLat } from './Elements/Types';

function App() {
  const [longLat, setLongLat] = useState<ILongLat>({
    longitude: 90,
    latitude: 90
  });

  const navigate = useNavigate();

  const successCallback = (position: any) => {
    setLongLat({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    });
    navigate('/weather');
  };
  const errorCallback = (error: any) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather longLat={longLat} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
