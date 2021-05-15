import { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/globals.css';

import styled from 'styled-components';

import MainHeader from '../components/Header';
import OverlayLayer from '../components/OverlayLayer';

const PageLayout = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }) {
  const [barState, setBarState] = useState(false);

  return (
    <>
      <PageLayout>
        <MainHeader setBarState={setBarState} barState={barState} />
        <Component barState={barState} {...pageProps} />
      </PageLayout>
      <OverlayLayer setBarState={setBarState} barState={barState} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
