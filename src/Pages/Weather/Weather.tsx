import { useState, useEffect } from 'react';
import Styles from './Weather.module.scss';
import CloudIcon from '@mui/icons-material/Cloud';
// import weather from '../../data';
import { ILongLat } from '../../Elements/Types';
import axios from 'axios';
import { useQuery } from 'react-query';

interface props {
  longLat: ILongLat;
}

export const Weather = (props: props) => {
  const {
    longLat: { longitude, latitude }
  } = props;
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/currentt',
      params: { lon: `${longitude}`, lat: `${latitude}` },
      headers: {
        'X-RapidAPI-Key': '3b32d1897bmshd900876b274af28p1d46e5jsn0a440868f822',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };

    async function getWeather() {
      const { data } = await axios.request(options);
      setWeather(data.data[0]);
    }
    
    //const { data, isLoading, isError } = useQuery('weather', getWeather);
    getWeather();
  }, [longitude, latitude]);

  // console.log(weather[0].rh);
  

  //props:unknown
  //const {weather} = props;
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const aMpM = hours >= 12 ? 'PM' : 'AM';
    if (minutes < 10) {
      return `${hours}:0${minutes} ${aMpM}`;
    }
    return `${hours}:${minutes} ${aMpM}`;
  }

  function UVScale() {
    if (weather.uv < 2) {
      return 'means minimal danger from the sun’s UV rays for the average person. Most people can stay in the sun for up to one hour during peak sun (10 am to 4 pm) without burning. However, people with very sensitive skin and infants should always be protected from prolonged sun exposure.';
    }
    if (weather.uv >= 2 && weather.uv < 5) {
      return 'means moderate risk of harm from unprotected sun exposure. People with fair skin who burn easily and freckle should cover up and use sunscreen. People with darker skin should be careful not to burn and to cover up if they will be outside for a long time.';
    }
    if (weather.uv >= 5 && weather.uv < 7) {
      return 'means high risk of harm from unprotected sun exposure. People with fair skin who burn easily and freckle should cover up and use sunscreen. People with darker skin should be careful not to burn and to cover up if they will be outside for a long time.';
    }
    if (weather.uv >= 7 && weather.uv < 10) {
      return 'means very high risk of harm from unprotected sun exposure. People with fair skin who burn easily and freckle should cover up and use sunscreen. People with darker skin should be careful not to burn and to cover up if they will be outside for a long time.';
    }
    if (weather.uv >= 10) {
      return 'means extreme risk of harm from unprotected sun exposure. People with fair skin who burn easily and freckle should cover up and use sunscreen. People with darker skin should be careful not to burn and to cover up if they will be outside for a long time.';
    }
  }

  if (weather === null) {
    return (
      <div className={Styles.loader}>
        <span className={Styles.loader__element}></span>
        <span className={Styles.loader__element}></span>
        <span className={Styles.loader__element}></span>
      </div>
    );
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.top}>
        <div className={Styles.topCard}>
          <div className={Styles.topCardLeft}>
            <div className={Styles.CW}>
              <h1>{weather.weather.description}</h1>
              <h2>{getTime()}</h2>
            </div>

            <div className={Styles.temp}>
              <CloudIcon />
              <h2>{weather.temp}°c</h2>
            </div>

            <div className={Styles.cCoverage}>
              <h2>
                <span>{weather.clouds}%</span> Total cloud coverage
              </h2>
            </div>
          </div>

          <div className={Styles.topCardRight}>
            <h2>
              Wind Direction: <span>{weather.wind_cdir}</span>
            </h2>
            <h2>
              Wind Speed: <span> {weather.wind_spd}m/s</span>
            </h2>
            <h2>
              Elevation Angle: <span> {weather.elev_angle}°</span>
            </h2>
            <h2>
              UV Index: <span> {weather.uv}</span>
            </h2>
          </div>
        </div>
        <div className={Styles.rightCard}>
          <div className={Styles.div}>
            <h1>
              City: <span>{weather.city_name}</span>
            </h1>
          </div>
          <div className={Styles.div}>
            <h1>
              Latitude: <span>{weather.lon}</span>
            </h1>
          </div>
          <div className={Styles.div}>
            <h1>
              Latitude: <span>{weather.lon}</span>
            </h1>
          </div>
          <div className={Styles.div}>
            <h1>
              Timezone: <span>{weather.timezone}</span>
            </h1>
          </div>
        </div>
      </div>

      <div className={Styles.bottom}>
        <div className={Styles.bottomLeftCard}>
          <div className={Styles.div}>
            <h3>
              Relative Humidity: <span>{weather.rh}</span>
            </h3>
            <h3>
              Visibility: <span>{weather.vis}(default KM)</span>
            </h3>
            <h3>
              Radiation: <span>{weather.dhi}(W/m^2)</span>
            </h3>
          </div>
          <div className={Styles.div}>
            <h3>
              Sea Level Pressure: <span>{weather.slp}(mb)</span>
            </h3>
            <h3>
              Maximum Uv: <span>{weather.uv}</span>
            </h3>
            <h3>
              Accumulated Snow: <span>{weather.snow}(mm)</span>
            </h3>
          </div>
        </div>

        <div className={Styles.bottomRightCard}>
          <h1>UV Index Interpretation</h1>
          <p>
            A UV index of <span>{weather.uv}</span> {UVScale()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
