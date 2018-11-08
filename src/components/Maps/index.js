import React from 'react';
import ReactGoogleMapImage from 'react-google-map-image';

const googleMapApiConfig = {
  center: 'Rua Miguel Mentem, Vila Guilherme, São Paulo, SP',
  size: '600x300',
  zoom: '15',
  key: 'AIzaSyDQqA7pMadH6_nEbQHzrZrJiwX4ovzsdMM',
  maptype: 'roadmap',
};

const Maps = () => (
  <ReactGoogleMapImage
    config={googleMapApiConfig}
    wrapperStyle={{ width: '100%' }}
    style={{ width: '500px', height: 'auto', border: '1px solid #ccc' }}
  />
);

export default Maps;
