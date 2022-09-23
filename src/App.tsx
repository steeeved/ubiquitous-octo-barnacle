import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Navbar } from './Elements';
import { Home, About, Weather } from './Pages';
import { ILongLat } from './Elements/Types';

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  const [longLat, setLongLat] = useState<ILongLat>({
    longitude: 0.04295,
    latitude: 36.368519
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
    setIsError(true);
    navigate('/');
    console.log(error);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (
      window.confirm('Please enable location services to use this app.') == true
    ) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []);

  return (
    <div className='App'>
      <Navbar isError={ isError} />
      <Routes>
        <Route
          path='/'
          element={<Home isError={isError} setIsError={setIsError} />}
        />
        {isError === false && <Route path='/weather' element={<Weather longLat={longLat} />} />}
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
