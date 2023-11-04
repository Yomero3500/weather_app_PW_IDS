import React from 'react';
import WeatherDetail from './WeatherDetail'; 
import { IconType } from 'react-icons';
import { WiCloudyWindy,WiHumidity} from 'react-icons/wi'
import {GiSunrise, GiSunset} from 'react-icons/gi'
import {FaCompressArrowsAlt} from "react-icons/fa";
import {FaEyeLowVision} from "react-icons/fa6";
import {LiaWindSolid} from "react-icons/lia"
import {BiSolidThermometer} from "react-icons/bi";

interface WeatherDetailsProps {
  data: {
    current?: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current) {
    return null;
  }

  const { current, forecast } = data;

  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white italic font-bold">Detalles del clima</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-medium">
        <WeatherDetail
        icon={WiCloudyWindy as IconType}
          label="Velocidad del viento"
          value={`${current.wind_kph} k/h`}
          ariaLabel={`Wind Speed: ${current.wind_kph} k/h`}
        />
        <WeatherDetail
          icon={WiHumidity as IconType}
          label="Humedad"
          value={`${current.humidity}%`}
          ariaLabel={`Humidity: ${current.humidity}%`}
        />
        <WeatherDetail
          icon={LiaWindSolid as IconType}
          label="Dirección del viento" 
          value={current.wind_dir}
          ariaLabel={`Wind Direction: ${current.wind_dir}`}
        />
        <WeatherDetail
          icon={GiSunrise as IconType}
          label="Amanecer"
          value={forecast?.forecastday[0]?.astro.sunrise || ''}
          ariaLabel={`Sunrise: ${forecast?.forecastday[0]?.astro.sunrise || ''}`}
        />
        <WeatherDetail
          icon={GiSunset as IconType}
          label="Atardecer"
          value={forecast?.forecastday[0]?.astro.sunset || ''}
          ariaLabel={`Sunset: ${forecast?.forecastday[0]?.astro.sunset || ''}`}
        />
        <WeatherDetail
          icon={FaCompressArrowsAlt as IconType}
          label="Presión del aire"
          value={`${current.pressure_mb} hPa`}
          ariaLabel={`Air Pressure: ${current.pressure_mb} hPa`}
        />
        <WeatherDetail
        icon={BiSolidThermometer as IconType}
          label="Sensación real"
          value={`${current.feelslike_c}°`}
          ariaLabel={`Feels Like: ${current.feelslike_c}°`}
        />
        <WeatherDetail
        icon={FaEyeLowVision as IconType}
          label="Visibilidad"
          value={`${current.vis_km} km`}
          ariaLabel={`Visibility: ${current.vis_km} km`}
        />
      </div>
    </div>
  );
};

export default WeatherDetails;
