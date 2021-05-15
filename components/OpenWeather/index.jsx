import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-lodash-debounce';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

import ForecastHour from './ForecastHour';

import {
  BigLabel,
  CurrentWeatherWrapper,
  WeatherIcon,
  Temperature,
  SmallLabel,
  WeatherDetailsWrapper,
  WeatherDetail,
  Text,
  ForecastWrapper,
  Forecast,
  Grid,
} from './ui';

const OpenWeather = ({ coords }) => {
  const [temp, setTemp] = useState(null);
  const [tempHum, setTempHum] = useState(null);
  const [wind, setWind] = useState(null);
  const [region, setRegion] = useState(null);
  const [country, setCountry] = useState(null);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [hours, setHours] = useState();
  const [feelsLike, setFeelsLike] = useState(null);
  const [pressure, setPressure] = useState(null);

  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;

  const cityURL = `
  https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}
  `;

  const debouncedValue = useDebounce(URL, 400);

  useEffect(() => {
    (function getData() {
      axios({
        method: 'get',
        url: URL,
        validateStatus: false,
      })
        .then((res) => {
          if (res.statusText === 'OK') {
            setTemp(res.data.current.temp);
            setTempHum(res.data.current.humidity);
            setWind(res.data.current.wind_speed);
            setIcon(res.data.current.weather[0].main);
            setDescription(res.data.current.weather[0].description);
            setSunrise(res.data.current.sunrise);
            setSunset(res.data.current.sunset);
            setHours(res.data.hourly);
            setFeelsLike(res.data.current.feels_like);
            setPressure(res.data.current.pressure);
          } else {
            setTemp(null);
            setTempHum(null);
            setWind(null);
            setIcon(null);
            setDescription(null);
            setSunrise(null);
            setSunset(null);
            setHours(null);
            setFeelsLike(null);
            setPressure(null);
          }
        })

        .catch((err) => console.log(err));
    })();
  }, [debouncedValue]);

  useEffect(() => {
    (function getCity() {
      axios({
        method: 'get',
        url: cityURL,
        validateStatus: false,
      })
        .then((res) => {
          if (res.statusText === 'OK') {
            setRegion(res.data[0].name);
            setCountry(res.data[0].country);
          } else {
            setRegion(null);
            setCountry(null);
          }
        })

        .catch((err) => console.log(err));
    })();
  }, [debouncedValue]);

  let weatherIcon = null;

  if (icon === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (icon === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (icon === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (icon === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (icon === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (icon === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Nocvember',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;

  const getTime = (time) => {
    const getRightTime = new Date(time * 1000);
    const hoursTime = getRightTime.getHours();
    const minutes = `0${getRightTime.getMinutes()}`;
    const formattedTime = `${hoursTime}:${minutes.substr(-2)}`;
    return <div>{formattedTime}</div>;
  };

  const getDay = (day) => {
    const dayTest = new Date(day * 1000);
    const day2 = dayTest.getDate();
    return <span>{day2}</span>;
  };

  const getMonth = (day) => {
    const month2 = new Date(day * 1000);
    const month = month2.getMonth() + 1;
    return <span>{month}</span>;
  };

  return (
    <>
      <BigLabel>
        {region}, {country}
      </BigLabel>
      <SmallLabel weight="400">{date}</SmallLabel>
      <Grid>
        <CurrentWeatherWrapper>
          <WeatherIcon>{weatherIcon}</WeatherIcon>
          <div>
            <Temperature>{Math.floor(temp)}&#176;</Temperature>
            <SmallLabel weight="400" firstToUpperCase>
              {description}
            </SmallLabel>
          </div>
        </CurrentWeatherWrapper>
        <WeatherDetailsWrapper>
          <WeatherDetail>
            <SmallLabel align="center" weight="400">
              {Math.floor(feelsLike)}&#176;
            </SmallLabel>
            <Text align="center">Feels like</Text>
          </WeatherDetail>
          <WeatherDetail>
            <SmallLabel align="center" weight="400">
              {wind} m/s
            </SmallLabel>
            <Text align="center">Wind</Text>
          </WeatherDetail>
          <WeatherDetail>
            <SmallLabel align="center" weight="400">
              {getTime(sunrise)}
            </SmallLabel>
            <Text align="center">Sunrise</Text>
          </WeatherDetail>
          <WeatherDetail>
            <SmallLabel align="center" weight="400">
              {Math.floor(pressure)} hPa
            </SmallLabel>
            <Text align="center">Pressure</Text>
          </WeatherDetail>
          <WeatherDetail>
            <SmallLabel align="center" weight="400">
              {tempHum}%
            </SmallLabel>
            <Text align="center">Humidity</Text>
          </WeatherDetail>
          <WeatherDetail>
            <SmallLabel align="center" weight="400">
              {getTime(sunset)}
            </SmallLabel>
            <Text align="center">Sunset</Text>
          </WeatherDetail>
        </WeatherDetailsWrapper>
      </Grid>
      <ForecastWrapper>
        <SmallLabel weight="400">Hour Forecast</SmallLabel>
        {hours && (
          <Forecast>
            {hours.map((item) => (
              <ForecastHour
                key={item.dt}
                temp={Math.floor(item.temp)}
                icon={item.weather[0].icon}
                month={getMonth(item.dt)}
                day={getDay(item.dt)}
                hour={getTime(item.dt)}
              />
            ))}
          </Forecast>
        )}
      </ForecastWrapper>
    </>
  );
};

OpenWeather.propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};

export default OpenWeather;
