import React from 'react';
import DateDisplay from './DateDisplay';
import WeatherIcon from './WeatherIcon'; 
import TemperatureDisplay from './TemperatureDisplay'; 
import LocationDisplay from './LocationDisplay'; 

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-red-200/30 p-7 rounded-xl bg-slate-900">
      <div className="flex items-center">
        <DateDisplay />
        {weatherIcon && <WeatherIcon icon={weatherIcon} />}
      </div>
      <TemperatureDisplay temperature={data.current?.temp_c || 0} />
      {data.location && <LocationDisplay location={data.location}/>}
    </div>
  );
};

export default Current;
