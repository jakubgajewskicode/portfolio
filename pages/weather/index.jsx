import React, { useState, useRef, useCallback } from 'react';
import MapGL, { FlyToInterpolator, GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import OpenWeather from '../../components/OpenWeather';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import styled from 'styled-components';
import { device } from '../../utils/media';

const TOKEN = process.env.NEXT_PUBLIC_MAP_KEY;

const Input = styled.div`
  padding: 20px 50px 0 50px;
  @media ${device.tablet} {
    padding-top: 20px;
    margin-left: 10%;
  }
`;

const Content = styled.div`
  background-color: rgb(119, 104, 104, 1);
  position: relative;
`;

const Map = styled.div`
  height: 50vh;

  @media ${device.tablet} {
    position: absolute;
    top: 25%;
    right: 10px;
    width: 50%;
    height: 56vh;
  }
`;

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const Weather = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1
  });
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0
  });
  const mapRef = useRef();
  const geoCoderRef = useRef();
  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
    setCoords({ latitude: newViewport.latitude, longitude: newViewport.longitude });
  }, []);

  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    setCoords({ latitude: newViewport.latitude, longitude: newViewport.longitude });

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    });
  }, []);

  return (
    <>
      <Content>
        <Input ref={geoCoderRef} />
        <OpenWeather coords={coords} />
      </Content>
      <Map>
        <MapGL
          ref={mapRef}
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          transitionInterpolator={new FlyToInterpolator()}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={TOKEN}
          width="100%"
          height="100%">
          <Geocoder
            mapRef={mapRef}
            containerRef={geoCoderRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={TOKEN}
            position="top-left"
            placeholder="Enter City or drag the map"
            marker
            zoom={6}
          />
          <GeolocateControl
            style={geolocateControlStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            auto
            zoom={5}
          />
        </MapGL>
      </Map>
    </>
  );
};

export default Weather;
