import { createContext } from 'react';
import { IProps } from '../Elements/Types';
import data from '../data';

export const WeatherContext = createContext(data);

export const WeatherProvider = ({ children }: IProps) => {
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

//const [weather, setWeather] = useState({});

//   return (
//     <WeatherContext.Provider value={{ weather, setWeather }}>
//       {children}
//     </WeatherContext.Provider>
//   );
// };

// export default WeatherContext;

// const options = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//   params: { lon: '37.147176', lat: '-0.717751' },
//   headers: {
//     'X-RapidAPI-Key': '3b32d1897bmshd900876b274af28p1d46e5jsn0a440868f822',
//     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//   }
// };

// //fetching data from the API using fetch
// const axios = require('axios');

// // fetch the data and store it in a variable
// const getData = async () => {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
