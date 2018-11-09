import React from 'react';
import ReactGoogleMapImage from 'react-google-map-image';


const Maps = ({ positionCenter }) => {
  const googleMapApiConfig = {
    center: positionCenter,
    size: '1024x450',
    zoom: '15',
    key: 'AIzaSyDQqA7pMadH6_nEbQHzrZrJiwX4ovzsdMM',
    maptype: 'roadmap',
  };

  const urlGMaps = `https://www.google.com.br/maps/place/${positionCenter}`;

  return (
    <a href={urlGMaps} active="true" target="_blank" rel="noopener noreferrer">
      <ReactGoogleMapImage
        config={googleMapApiConfig}
        wrapperStyle={{ width: '100%' }}
        style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }}
      />
    </a>
  );
};

export default Maps;
