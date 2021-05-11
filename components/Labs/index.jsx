import Link from 'next/link';

import {
  Main,
  LeftItem,
  RightItem,
  StyledHeader,
  H5,
  H1,
  Body,
  StyledBody,
  StyledAnchor
} from './ui';

import About from '../../public/Svgs/About.svg';

const LabsPage = () => {
  return (
    <Main>
      <RightItem>
        <StyledHeader>
          <H5>labs</H5>
          <H1>Testing Apps</H1>
        </StyledHeader>
        <StyledBody>
          <Body>
            <Link passHref href="https://jakubgajewskicode.github.io/cra-rr/">
              <StyledAnchor>Static website with nav</StyledAnchor>
            </Link>
            <ul>
              <li>
                <p>Based on React Router</p>
              </li>
            </ul>
          </Body>
          <Body>
            <Link passHref href="https://jakubgajewskicode.github.io/oop-js-game/">
              <StyledAnchor>Game - One Handed Bandit</StyledAnchor>
            </Link>
            <ul>
              <li>Used extensively JavaScript / CSS</li>
            </ul>
          </Body>
          <Body>
            <Link passHref href="/ui">
              <StyledAnchor>Custom UI</StyledAnchor>
            </Link>
            <ul>
              <li>All sort of Custom UI</li>
            </ul>
          </Body>
        </StyledBody>
      </RightItem>
      <LeftItem>
        <About />
      </LeftItem>
    </Main>
  );
};

export default LabsPage;
