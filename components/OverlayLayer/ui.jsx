import styled from 'styled-components';

import { device } from '../../utils/media';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  background-color: #000000;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${({ state }) => (state === true ? `1` : `0;`)};
  visibility: ${({ state }) => (state === true ? `visible` : `hidden`)};
  opacity: ${({ state }) => (state === true ? `1` : `0`)};
  transform: ${({ state }) =>
    state === true ? `translate3d(0, 0, 0)` : `translate3d(0, -100%, 0)`};
  transition: ${({ state }) =>
    state === true
      ? `opacity 700ms step-start, transform 700ms cubic-bezier(0.8, 0, 0.55, 0.94), visibility 700ms step-start, background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94);`
      : `opacity 700ms step-end, transform 700ms cubic-bezier(0.8, 0, 0.55, 0.94), visibility 700ms step-end, background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94);`};
`;

export const DetailList = styled.ul`
  width: 90%;
  margin-top: 11vmin;
  margin: 17vmin auto;
  transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 700ms;
  opacity: ${({ state }) => (state === true ? `1` : `0`)};
  height: 100%;
  padding-left: 0;
  position: relative;
  padding-top: 65px;
  list-style: none;
`;

export const GeneralWrap = styled.div`
  width: 0;

  :hover > div {
    opacity: 0.5;
    transition: opacity 300ms cubic-bezier(0.8, 0, 0.55, 0.94) 100ms;
  }

  :hover > div:hover {
    opacity: 1;
    transition: opacity 300ms cubic-bezier(0.8, 0, 0.55, 0.94) 100ms;
  }
`;

export const StyledLink2 = styled.li`
  a {
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.05em;
    font-size: 18vmin;
    text-decoration: none;
    color: #000000;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    transition: text-shadow 400ms cubic-bezier(0.8, 0, 0.55, 0.94),
      color 400ms cubic-bezier(0.8, 0, 0.55, 0.94);

    :hover {
      text-shadow: none;
      color: #ffffff;
    }
  }

  @media ${device.tablet} {
    a {
      font-size: 14vmin;
    }
  }
`;

export const LinksWrap = styled.div`
  width: min-content;
`;

export const StyledDetailLink = styled.li`
  @media ${device.mobileS} {
    width: min-content;
    a {
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 1.05em;
      color: #ffffff;
      font-size: 18vmin;
      text-decoration: none;
    }
  }

  @media ${device.tablet} {
    a {
      font-size: 14vmin;
    }
  }
`;

export const SocialWrap = styled.ul`
  display: inline-flex;
  margin-top: 40px;
  height: auto;
  padding: 0;
  li:not(:first-child) {
    margin-left: 35px;
  }

  li {
    :hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export const StyledSocial = styled.li`
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.8, 0, 0.55, 0.94);
  display: inline-block;
  width: 18px;
  height: 18px;
`;

export const Grid = styled.div`
  position: absolute;
  top: -20vh;
  left: 0;
  z-index: -1;
  display: flex;
  width: 100%;
  height: calc(100% + 20vh);
  opacity: 0.18;
  transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94);

  div:nth-last-child(1) {
    border-right: 1px solid #888;
  }
`;

export const Item = styled.div`
  border-left: 1px solid #888;
  flex: 1;
  height: 100%;
`;
