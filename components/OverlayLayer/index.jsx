import Link from 'next/link';

import { Overlay, DetailList, GeneralWrap, LinksWrap, StyledDetailLink, Grid, Item } from './ui';

// eslint-disable-next-line react/prop-types
const OverlayLayer = ({ barState, setBarState }) => {
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

export default OverlayLayer;
