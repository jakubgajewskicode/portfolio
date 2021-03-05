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
          <Body>
            I am currently most passion about:
            <ul>
              <li>JavaScript ES6</li>
              <li> React</li>
              <li>Typescript</li>
              <li>GraphQL</li>
              <li> Contentful</li>
              <li>Next.js</li>
            </ul>
            Other skills include: HTML5 &amp; CSS3, Jest Testing, Styled-Components, Responsive Web
            Design, Building UI Components, GraphQL schemas, Storybook, Sketch, Docker, Google
            Analytics, GSAP, Accessibility standards and tools.
          </Body>
        </StyledBody>
      </RightItem>
      <LeftItem>
        <img src={Skills} alt="skills" />
      </LeftItem>
    </Main>
  );
};

export default SkillsPage;
