export interface ILongLat {
  longitude: number;
  latitude: number;
}

export interface IWeather {
  city_name: string;
  temp: number;
  weather: {
    description: string;
    icon: string;
  };
}

export type IProps = {
  children: React.ReactNode;
};
