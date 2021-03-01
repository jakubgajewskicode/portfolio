import { Main, LeftItem, RightItem, StyledHeader, H5, H1, Body, StyledBody } from './ui';

import About from '../../public/Svgs/About.svg';

const LabsPage = () => {
  return (
    <Main>
      <RightItem>
        <StyledHeader>
          <H5>labs</H5>
          <H1>??</H1>
        </StyledHeader>
        <StyledBody>
          <Body>Labs Here</Body>
        </StyledBody>
      </RightItem>
      <LeftItem>
        <About />
      </LeftItem>
    </Main>
  );
};

export default LabsPage;
