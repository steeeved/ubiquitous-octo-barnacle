import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Navbar } from './Elements';
import { Home, About, Weather } from './Pages';
import { ILongLat } from './Elements/Types';
import { Iso } from '@material-ui/icons';

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
    setIsError(false);
  };
  const errorCallback = (error: any) => {
    navigate('/');
    console.log(error);
    setIsError(true);
  };

  // useEffect(() => {
  //   if (
  //     window.confirm('Please enable location services to use this app.') === false
  //   ) {
  //     setIsError(false);
  //   }
  // }, []);

  console.log(isError);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <div className='App'>
      <Navbar isError={isError} />
      <Routes>
        <Route
          path='/'
          element={<Home isError={isError} setIsError={setIsError} />}
        />
        {isError === false && (
          <Route path='/weather' element={<Weather longLat={longLat} />} />
        )}
        <Route path='/about' element={<About />} />
        <Route path='*' element={<h1 style={{ color: 'red' }}>Check where you are going mate</h1>} />
      </Routes>
    </div>
  );
}

export default App;
