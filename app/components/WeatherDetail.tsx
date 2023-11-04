import { IconType } from 'react-icons';
import React from 'react';

interface WeatherDetailProps {
  label: string;
  icon: IconType,
  value: string;
  ariaLabel: string;
}

const WeatherDetail = ({ label, value, ariaLabel, icon}: WeatherDetailProps) => {
  return (
    <div className="bg-white/30 flex p-4 items-center justify-center gap-6 rounded-xl">
      <div className="text-2xl">
        <h3>{label}</h3>
        {icon && <div className=" flex p-1 items-center justify-center">{React.createElement(icon)}</div>}
        <h3 className="text-white bg-black/25 rounded-xl mt-4" aria-label={ariaLabel}>
          {value}
        </h3>
      </div>
    </div>
  );
};

export default WeatherDetail;
