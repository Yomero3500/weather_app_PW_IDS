import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface LocationDisplayProps {
  location: {
    name: string;
    region: string;
  };
}

const LocationDisplay = ({ location }: LocationDisplayProps) => {
  return (
    <div>
      <div className="flex items-center text-white bg-red-200/25 px-2 py-2 rounded-xl">
        <LocationOnIcon />
        <span>
          {location.name}, {location.region}
        </span>
      </div>
    </div>
  );
};

export default LocationDisplay;
