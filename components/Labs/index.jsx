import { Main, LeftItem, RightItem, StyledHeader, H5, H1, Body, StyledBody } from './ui';

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
            Weather App
            <ul>
              <li>Sending requests to openweathermap API to process weather parameters</li>
            </ul>
          </Body>
          <Body>
            Static website
            <ul>
              <li>Based on React Router</li>
            </ul>
          </Body>
          <Body>
            Game - One Handed Bandit
            <ul>
              <li>Used extensively JavaScript / CSS</li>
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
