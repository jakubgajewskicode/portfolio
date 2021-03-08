import { Main, LeftItem, RightItem, StyledHeader, H5, H1, Body, StyledBody } from './ui';

import Skills from '../../public/Pngs/10.png';

const SkillsPage = () => {
  return (
    <Main>
      <RightItem>
        <StyledHeader>
          <H5>skills</H5>
          <H1>Tech stack</H1>
        </StyledHeader>
        <StyledBody>
          <Body>
            <p>I am currently most passion about:</p>
            <ul>
              <li>JavaScript ES6</li>
              <li> React</li>
              <li>Typescript</li>
              <li>GraphQL</li>
              <li> Contentful</li>
              <li>Next.js</li>
            </ul>
           <p> Other skills include: HTML5 &amp; CSS3, Jest Testing,
            Styled-Components, Responsive Web Design, Building UI Components,
            GraphQL schemas, Storybook, Sketch/Figma, Docker, Google Analytics,
            GSAP, Accessibility standards and tools.</p>
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
