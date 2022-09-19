import Styles from './Weather.module.scss';
import CloudIcon from '@mui/icons-material/Cloud';
import { useContext } from 'react';
import { WeatherContext } from '../../Context/weatherContext';

export const Weather = () => {
  const weather = useContext(WeatherContext);

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

  const files = [
    {
      name: 'Cloud',
      icon: <CloudIcon />
    }
  ];

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
              <div className={Styles.img}>
                <CloudIcon />
              </div>
              <h2>{weather.temp}</h2>
            </div>
            <div className={Styles.cCoverage}>
              <h2>{weather.clouds}% Total cloud coverage</h2>
            </div>
          </div>
          <div className={Styles.topCardRight}>
            <h2>{weather.wind_cdir_full}</h2>
            <h2>{weather.wind_spd}m/s</h2>
          </div>
        </div>
        <div className={Styles.rightCard}>
          <div className={Styles.city}>
            <h1>{weather.city_name}</h1>
          </div>
          <div className={Styles.long}>
            <h1>Latitude:{weather.lon}</h1>
          </div>
          <div className={Styles.lat}>
            <h1>Latitude:{weather.lon}</h1>
          </div>
          <div className={Styles.timezone}>
            <h1>{weather.timezone}</h1>
          </div>
        </div>
      </div>

      <div className={Styles.bottom}>
        <div className={Styles.bottomLeftCard}>
          <div className={Styles.left}>
            <h3>Relative Humidity: {weather.rh}</h3>
            <h3>Visibility: {weather.vis} (default KM)</h3>
            <h3>Radiation: {weather.dhi} (W/m^2)</h3>
          </div>
          <div className={Styles.right}>
            <h3>Sea Level Pressure {weather.slp}(mb)</h3>
            <h3>Maximum Uv: {weather.uv}</h3>
            <h3>Accumulated Snow: {weather.snow}(mm)</h3>
          </div>
        </div>
        <div className={Styles.bottomRightCard}>
          <h1>UV Index Interpretation</h1>
          <p>
            A UV index of <span>2</span> {UVScale()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
