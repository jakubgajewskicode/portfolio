import styled from 'styled-components';
import { device } from '../../utils/media';

export const BigLabel = styled.h2`
  font-weight: 600;
  font-size: 35px;
  padding: 5px 0;
  margin: 20px 0;
  color: #ffffff;
`;

export const CurrentWeatherWrapper = styled.div`
  display: flex;
  justify-self: center;
  justify-content: left;
  align-items: center;

  grid-gap: 30px;
  @media ${device.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-start;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;

export const Temperature = styled.h3`
  display: block;
  font-size: 50px;
  font-weight: 400;
  margin: 0;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
`;

export const SmallLabel = styled.h4`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  margin: 0;

  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '20px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  }
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  }
`;

export const Grid = styled.section`
  display: grid;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const WeatherDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-row: 2;
  padding: 10px 0;
  margin: 20px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;
`;

export const WeatherDetail = styled.div`
  flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${device.laptop} {
    padding: 20px 10px;
  }
`;

export const Text = styled.span`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: ${({ align }) => align || 'left'};

  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '15px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '17px'};
  }
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '19px'};
  }
`;

export const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

export const Forecast = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-bottom: 20px;
`;
