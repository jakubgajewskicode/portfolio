import styled, { keyframes } from 'styled-components';

import { device } from '../../utils/media';

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
    margin: 50px auto;
  }

  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

export const H1 = styled.h1`
  font-size: 55px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -1px;

  @media ${device.tablet} {
    font-size: 65px;
    width: min-content;
  }

  @media ${device.laptop} {
    /* font-size: 60px; */
    font-size: 70px;
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

export const Body = styled.p`
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

export const StyledLink = styled.span`
  display: inline;
  position: relative;
  cursor: pointer;
  transition: margin-left 0.7s ease;
  font-weight: bold;

  ::after {
    content: '';
    position: absolute;
    width: 55%;
    left: 125px;
    top: 60%;
    background-color: #000;
    opacity: 0.1;
    height: 1px;
  }

  :hover {
    margin-left: 30px;

    ::after {
      transition: left 0.7s cubic-bezier(0.8, 0, 0.55, 0.94) 0.7s,
        width 0.7s ease;

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
      left: 225px;
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

export const RightItem = styled.aside`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
