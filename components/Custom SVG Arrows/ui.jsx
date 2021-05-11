import styled from 'styled-components';

export const SVGWrap = styled.span`
  position: absolute;
  top: 20vh;
  left: 0;
  cursor: pointer;
  width: 35px !important;
  height: 35px !important;
  color: #424242;
  opacity: 0.5;
  cursor: pointer;
  svg {
    :hover {
      #light1 {
        transform: translateX(20%);
      }
      #dark2 {
        transform: translate(40%);
        opacity: 0;
      }
      #dark1 {
        transform: translateX(5%);
      }
    }
    #darkGroup {
      fill: grey;
    }
    #lightGroup {
      fill: #c9c9c9;
    }
    #dark1,
    #dark2,
    #light1 {
      transition: all 1s ease;
    }
    #dark1 {
      transform: translateX(-100%);
    }
  }
`;

export const RightSVGArrows = (
  <svg width="81" height="45" viewBox="0 0 81 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="trangles" clipPath="url(#clip0)">
      <g id="darkGroup">
        <path
          id="dark1"
          d="M44.75 23.634C45.4167 24.0189 45.4167 24.9811 44.75 25.366L15.5 42.2535C14.8333 42.6384 14 42.1573 14 41.3875V7.61251C14 6.84271 14.8333 6.36159 15.5 6.74649L44.75 23.634Z"
          fill="#9A9A9A"
          fillOpacity="0.8"
        />
        <path
          id="dark2"
          d="M57.5 23.634C58.1667 24.0189 58.1667 24.9811 57.5 25.366L28.25 42.2535C27.5833 42.6384 26.75 42.1573 26.75 41.3875V7.6125C26.75 6.8427 27.5833 6.36158 28.25 6.74648L57.5 23.634Z"
          fill="#5A5A5A"
          fillOpacity="0.8"
        />
      </g>
      <g id="lightGroup">
        <path
          id="light1"
          d="M44.5 23.634C45.1667 24.0189 45.1667 24.9811 44.5 25.366L15.25 42.2535C14.5833 42.6384 13.75 42.1573 13.75 41.3875V7.6125C13.75 6.8427 14.5833 6.36158 15.25 6.74648L44.5 23.634Z"
          fill="#9A9A9A"
          fillOpacity="0.8"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="81" height="45" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
