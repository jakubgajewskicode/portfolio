import { css } from 'styled-components';
export default css`
  .react-multi-carousel-list {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .react-multi-carousel-track {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    position: relative;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    will-change: transform, transition;
  }
  .react-multiple-carousel__arrow {
    position: absolute;
    outline: none;
    transition: all 0.5s;
    border-radius: 35px;
    z-index: 1;
    border: none;
    background: rgba(0, 0, 0, 0.3);
    min-width: 35px;
    min-height: 35px;
    opacity: 1;
    cursor: pointer;
  }
  .react-multiple-carousel__arrow:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .react-multiple-carousel__arrow::before {
    font-size: 20px;
    color: #fff;
    display: block;
    font-family: sans-serif;
    text-align: center;
    z-index: 2;
    position: relative;
  }

  .react-multiple-carousel__arrow--left {
    left: 0px;
    top: 24%;
  }
  .react-multiple-carousel__arrow--left::before {
    content: '<';
  }
  .react-multiple-carousel__arrow--right {
    right: 0;
    top: 24%;
  }
  .react-multiple-carousel__arrow--right::before {
    content: '>';
  }

  .react-multi-carousel-dot-list {
    position: absolute;
    top: 7px;
    display: flex;
    left: 0;
    right: -163px;
    justify-content: center;
    margin: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .react-multi-carousel-dot button {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 1;
    padding: 5px 5px 5px 5px;
    box-shadow: none;
    transition: background 0.5s;
    border-width: 2px;
    border-style: solid;
    border-color: grey;
    padding: 0;
    margin: 0;
    margin-right: 6px;
    outline: 0;
    cursor: pointer;
  }
  .react-multi-carousel-dot button:hover:active {
    background: #080808;
  }
  .react-multi-carousel-dot--active button {
    background: #080808;
  }
  .react-multi-carousel-item {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .react-multi-carousel-item {
      flex-shrink: 0 !important;
    }
    .react-multi-carousel-track {
      overflow: visible !important;
    }
  }
`;
