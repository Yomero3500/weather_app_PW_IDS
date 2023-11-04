import React from 'react';

interface DayForecastProps {
  date: string;
  icon: string;
  text: string;
  maxTemp: number;
  minTemp: number;
}

const DayForecast = ({ date, icon, text, maxTemp, minTemp }: DayForecastProps) => {
  return (
    <div className="bg-white/25 p-1 text-center italic rounded-2xl flex flex-col items-center font-medium gap-4" role="group" aria-label={`Forecast for ${new Date(date).toLocaleString("es", { weekday: "long" })}`}>
      <p className=" text-xl">{new Date(date).toLocaleString("es", { weekday: "long" })}</p>
      <img className="w-50 h-50" src={icon} alt={text} aria-label={text} />
      <div>
        <p className="bg-black/25 px-2 italic rounded-xl text-white mb-2">
          Max:{" "}
          <span aria-label={`Maximum temperature: ${maxTemp.toFixed()} degrees Fahrenheit`}>
            {maxTemp.toFixed()}°
          </span>
        </p>
        <p className="bg-black/25 px-2 italic rounded-xl text-white">
          Min:{" "}
          <span aria-label={`Minimum temperature: ${minTemp.toFixed()} degrees Fahrenheit`}>
            {minTemp.toFixed()}°
          </span>
        </p>
      </div>
    </div>
  );
};

export default DayForecast;
