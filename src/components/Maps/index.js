import React from 'react';
import ReactGoogleMapImage from 'react-google-map-image';


const Maps = ({ positionCenter }) => {
  const googleMapApiConfig = {
    center: positionCenter,
    size: '1024x500',
    zoom: '16',
    key: 'AIzaSyDQqA7pMadH6_nEbQHzrZrJiwX4ovzsdMM',
    maptype: 'roadmap',
  };

  return (
    <ReactGoogleMapImage
      config={googleMapApiConfig}
      wrapperStyle={{ width: '100%' }}
      style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
    />
  );
};

export default Maps;
