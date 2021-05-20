import {
  Main,
  LeftItem,
  RightItem,
  StyledHeader,
  H5,
  H1,
  Body,
  StyledBody,
  ButtonWrapper,
  Button,
} from './ui';

import About from '../../public/Svgs/About.svg';

const LabsPage = () => (
  <Main>
    <RightItem>
      <StyledHeader>
        <H5>labs</H5>
        <H1>Testing Apps</H1>
      </StyledHeader>
      <StyledBody>
        <Body>
          <H5>Static website with nav</H5>
          <ul>
            <li>Based on React Router</li>
          </ul>
          <ButtonWrapper>
            <form>
              <Button
                type="submit"
                formAction="https://jakubgajewskicode.github.io/cra-rr/"
              >
                View Demo
              </Button>
            </form>
          </ButtonWrapper>

          <H5>Game - One Handed Bandit</H5>
          <ul>
            <li>Used extensively JavaScript / CSS</li>
          </ul>
          <ButtonWrapper>
            <form>
              <Button
                type="submit"
                formAction="https://jakubgajewskicode.github.io/oop-js-game/"
              >
                View Demo
              </Button>
            </form>
          </ButtonWrapper>
          <H5>All sort of Custom UI</H5>
          <ButtonWrapper>
            <form>
              <Button type="submit" formAction="/ui">
                View examples here
              </Button>
            </form>
          </ButtonWrapper>
        </Body>
      </StyledBody>
    </RightItem>
    <LeftItem>
      <About />
    </LeftItem>
  </Main>
);

export default LabsPage;
