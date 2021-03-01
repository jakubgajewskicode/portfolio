import { Main, LeftItem, RightItem, StyledHeader, H5, H1, Body, StyledBody } from './ui';

import Skills from '../../public/Pngs/10.png';

const SkillsPage = () => {
  return (
    <Main>
      <RightItem>
        <StyledHeader>
          <H5>skills</H5>
          <H1>??</H1>
        </StyledHeader>
        <StyledBody>
          <Body>Skills Here</Body>
        </StyledBody>
      </RightItem>
      <LeftItem>
        <img src={Skills} alt="skills" />
      </LeftItem>
    </Main>
  );
};

export default SkillsPage;
