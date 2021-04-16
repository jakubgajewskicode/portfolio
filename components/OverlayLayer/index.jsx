import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { Overlay, DetailList, GeneralWrap, LinksWrap, StyledDetailLink, Grid, Item } from './ui';

const OverlayLayer = ({ barState, setBarState }) => {
  if (barState) {
    useEffect(() => {
      document.body.style = 'overflow: hidden;';
    });
  }

  if (!barState) {
    useEffect(() => {
      document.body.style = 'overflow: visiable;';
    });
  }
  return (
    <Overlay state={barState}>
      <DetailList state={barState}>
        <GeneralWrap>
          <LinksWrap>
            <StyledDetailLink
              onClick={() => {
                setBarState();
              }}>
              <Link href="/projects">projects</Link>
            </StyledDetailLink>
          </LinksWrap>
          <LinksWrap>
            <StyledDetailLink
              onClick={() => {
                setBarState();
              }}>
              <Link href="/skills">skills</Link>
            </StyledDetailLink>
          </LinksWrap>
          <LinksWrap>
            <StyledDetailLink
              onClick={() => {
                setBarState();
              }}>
              <Link href="/labs">labs</Link>
            </StyledDetailLink>
          </LinksWrap>
          <LinksWrap>
            <StyledDetailLink
              onClick={() => {
                setBarState();
              }}>
              <Link href="/about">about</Link>
            </StyledDetailLink>
          </LinksWrap>
        </GeneralWrap>
        <Grid>
          <Item />
          <Item />
          <Item />
          <Item />
        </Grid>
      </DetailList>
    </Overlay>
  );
};

OverlayLayer.propTypes = {
  barState: PropTypes.bool,
  setBarState: PropTypes.func
};

export default OverlayLayer;
