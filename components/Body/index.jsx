import Link from 'next/link';
import styled from 'styled-components';
import NewBulb2 from '../../public/Svgs/BulbHero2.svg';

import {
  Main,
  LeftItem,
  RightItem,
  StyledHeader,
  H5,
  H1,
  Body,
  StyledLink,
  StyledBody,
} from './ui';

const StyledAnchor = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 1px solid black;

  :hover {
    opacity: 0.5;
  }
`;

const MainBody = () => (
  <Main>
    <LeftItem>
      <NewBulb2 />
    </LeftItem>
    <RightItem>
      <StyledHeader>
        <H5>intro</H5>
        <H1>WEB DEVELOPER BASED IN LONDON</H1>
      </StyledHeader>
      <StyledBody>
        <Body>
          I’m a passionate, self-taught front-end developer currently working
          full time for&nbsp;
          <Link passHref href="https://www.rapha.cc/">
            <StyledAnchor>Rapha Racing</StyledAnchor>
          </Link>
          . I strive to create visually appealing sites that feature user and
          developer friendly environments.
        </Body>
        <Link href="/projects" passHref>
          <StyledLink>To my projects</StyledLink>
        </Link>
      </StyledBody>
    </RightItem>
  </Main>
);

export default MainBody;
