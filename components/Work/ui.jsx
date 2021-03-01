import styled, { keyframes } from 'styled-components';

import { device } from '../../utils/media';

import styles from './styles';

const fadeIn = keyframes`
  0% {
    opacity: 0;
		transform:translate3d(0, 20px, 0);
  }
  100% {
    opacity: 1;
		transform:translate3d(0, 0px, 0);
  }
`;

const ImageIn = keyframes`
  0% {
    opacity: 0;

  }
  100% {
    opacity: 1;

  }
`;

export const Main = styled.section`
  display: flex;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 100px;
  }
  @media ${device.laptop} {
    margin: 0 auto;
  }

  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

export const H1 = styled.h1`
  font-size: 45px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -1px;

  @media ${device.tablet} {
    font-size: 50px;
    margin-right: 20px;
  }

  @media ${device.laptop} {
    margin-right: 123px;
    font-size: 55px;
    max-width: 1200px;
  }
`;

export const StyledHeader = styled.div`
  opacity: 0;

  @media ${device.mobileS} {
    animation: 700ms ${fadeIn} cubic-bezier(0.8, 0, 0.55, 0.94);
    opacity: 1;
  }
`;

export const H5 = styled.h5`
  font-size: 12px;
  color: #000000;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 10px 0;
  opacity: 0.3;
`;

export const StyledBody = styled.div`
  opacity: 0;

  @media ${device.mobileS} {
    animation: 1.7s ${fadeIn} cubic-bezier(0.8, 0, 0.55, 0.94);
    opacity: 1;
  }
`;

export const Body = styled.div`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.7);
  line-height: 2em;
  margin: 50px auto;

  @media ${device.tablet} {
    font-size: 14px;
    margin: 40px 20px 20px 100px;
  }

  @media ${device.laptop} {
    margin: 80px 20px 20px 100px;
  }
`;

export const StyledLink = styled.div`
  display: inline;
  position: relative;
  cursor: pointer;
  transition: margin-left 0.7s ease;

  ::after {
    content: '';
    position: absolute;
    width: 55%;
    left: 110px;
    top: 60%;
    background-color: #000;
    opacity: 0.1;
    height: 1px;
  }

  :hover {
    margin-left: 30px;

    ::after {
      transition: left 0.7s cubic-bezier(0.8, 0, 0.55, 0.94) 0.7s, width 0.7s ease;

      opacity: 1;
      width: 70%;
    }
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  @media ${device.tablet} {
    padding-left: 100px;
    ::after {
      left: 207px;
    }
  }
`;

export const LeftItem = styled.aside`
  margin: 0;
  opacity: 0;

  svg {
    height: 100%;
    width: 100%;
  }
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
    animation: 1200ms ${ImageIn} linear;

    opacity: 1;
  }
`;

export const BulbWrap = styled.aside`
  margin: 0;
  opacity: 0;

  svg {
    height: 70%;
    width: 100%;
  }
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
    animation: 1200ms ${ImageIn} linear;
    opacity: 1;
  }
`;

export const RightItem = styled.aside`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const SideNav = styled.ul`
  position: fixed;
  left: 0;
  z-index: 2;
  width: 100vh;
  height: 5vw;
  transform-origin: top;
  transform: rotateZ(-90deg) translate3d(-40vh, -50vh, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  list-style: none;
`;

export const CoverNav = styled.li`
  opacity: ${({ CoverStyle }) => (CoverStyle === true ? `1` : `0.5`)};
  border-bottom: ${({ CoverStyle }) => (CoverStyle === true ? `1px solid #000;` : `null`)};

  margin-left: 20px;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 200ms cubic-bezier(0.8, 0, 0.55, 0.94),
    border-bottom 200ms cubic-bezier(0.8, 0, 0.55, 0.94);
  padding-bottom: 5px;
`;

export const GridNav = styled.li`
  opacity: ${({ NavStyle }) => (NavStyle === true ? `0.5` : `1`)};
  border-bottom: ${({ NavStyle }) => (NavStyle === true ? `null` : `1px solid #000;`)};
  margin-left: 20px;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 200ms cubic-bezier(0.8, 0, 0.55, 0.94),
    border-bottom 200ms cubic-bezier(0.8, 0, 0.55, 0.94);
  padding-bottom: 5px;
`;

export const Grid = styled.section`
  justify-content: space-evenly;
  display: flex;
  list-style: none;
  grid-column: span 2;

  cursor: pointer;
  :hover > div {
    opacity: 0.5;
    transition: opacity 300ms cubic-bezier(0.8, 0, 0.55, 0.94) 100ms;
  }

  :hover > div:hover {
    opacity: 1;
    transition: opacity 300ms cubic-bezier(0.8, 0, 0.55, 0.94) 100ms;
  }
`;

export const Border = styled.span`
  position: absolute;
  width: 1px;
  right: 50%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
`;

export const GridItem = styled.div`
  /* position: relative; */
  grid-column: span 2;
`;

export const StyledDetailLink = styled.li`
  margin: 0 auto;

  @media ${device.mobileS} {
    width: min-content;
    a {
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 1.05em;
      color: #000000;
      font-size: 18vmin;
      text-decoration: none;
    }
  }

  @media ${device.tablet} {
    a {
      font-size: 7vmin;
    }
  }
`;

export const CarouselWrapper = styled.section`
  position: relative;
  ${styles};

  @media ${device.tablet} {
    .react-multiple-carousel__arrow--left {
      left: calc(1% + 1px);
      bottom: unset;
    }
    .react-multiple-carousel__arrow--right {
      right: calc(1% + 1px);
      bottom: unset;
    }
  }
`;
