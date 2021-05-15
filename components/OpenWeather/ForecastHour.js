import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SmallLabel, Text } from './ui';
import { device } from '../../utils/media';

const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`;

const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;

const ForecastHour = (props) => {
  const { temp, month, day, hour, icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <ForecastWrapper>
      <Text align="center">
        {month}.{day}
      </Text>
      <Text align="center">{hour}</Text>
      <WeatherIcon src={iconUrl} />
      <SmallLabel align="center" weight="400">
        {temp}&#176;
      </SmallLabel>
    </ForecastWrapper>
  );
};

ForecastHour.propTypes = {
  temp: PropTypes.number,
  month: PropTypes.object,
  day: PropTypes.object,
  hour: PropTypes.object,
  icon: PropTypes.string,
};

export default ForecastHour;
