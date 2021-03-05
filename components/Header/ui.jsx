import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  height: 100px;
  align-items: center;
`;

export const H3 = styled.h3`
  font-weight: 200;
  z-index: 2;
  margin: 0;

  :hover {
    a {
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: ${({ colorTitle }) => (colorTitle === true ? `#ffffff` : `#000000`)};
    transition: color 400ms cubic-bezier(0.8, 0, 0.55, 0.94) 400ms;
  }
`;

export const Hamburger = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  z-index: 10;
`;

export const TopBar = styled.span`
  width: 100%;
  height: 1px;
  z-index: 10;
  background-color: ${({ topChanged }) => (topChanged === true ? `#ffffff;` : `#000;`)};
  transition: transform 400ms cubic-bezier(0.8, 0, 0.55, 0.94),
    background-color 1.1s cubic-bezier(0.8, 0, 0.55, 0.94);
  transform-origin: 100% 0;
  transform: ${({ topChanged }) =>
    topChanged === true ? `translate3d(-5px, 3px, 0) rotate(-45deg)` : `translate3d(0, 10px, 0)`};
`;

export const BottomBar = styled.span`
  width: 100%;
  height: 1px;
  z-index: 10;
  background-color: ${({ bottomChanged }) => (bottomChanged === true ? `#ffffff;` : `#000;`)};
  transition: transform 400ms cubic-bezier(0.8, 0, 0.55, 0.94),
    background-color 1.1s cubic-bezier(0.8, 0, 0.55, 0.94);
  transform-origin: 100% 100%;
  transform: ${({ bottomChanged }) =>
    bottomChanged === true ? `translate3d(-5px, -3px, 0) rotate(45deg)` : `translate3d(0, 0px, 0)`};
`;

export const StyledHamburger = styled.div`
  z-index: 2;
`;
