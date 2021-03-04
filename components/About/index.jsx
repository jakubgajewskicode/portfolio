import Link from 'next/link';

import About from '../../public/Svgs/About.svg';
import Gitlab from '../../public/Svgs/GitLab.svg';
import Github from '../../public/Svgs/Github.svg';
import LargeMail from '../../public/Svgs/LargeMail.svg';
import Strava from '../../public/Svgs/Strava.svg';
import Linkdin from '../../public/Svgs/LargeLinkdin.svg';
import InstagramLarge from '../../public/Svgs/instagramLarge.svg';

import {
  Main,
  LeftItem,
  RightItem,
  StyledHeader,
  H5,
  H1,
  Body,
  StyledBody,
  UL,
  LI,
  MainBody,
  StyledAnchor
} from './ui';

const AboutPage = () => {
  return (
    <Main>
      <RightItem>
        <StyledHeader>
          <H5>about</H5>
          <H1>Front End Developer living in Hackney, London.</H1>
        </StyledHeader>
        <StyledBody>
          <Body>
            Currently working full time on&nbsp;
            <Link passHref href="https://www.rapha.cc/">
              <StyledAnchor>Rapha&apos;s Racing </StyledAnchor>
            </Link>
            front end new e-commerce project. Starting from designs systems and creating mobile
            first UI to engineering part which means integrating them into our data structure:
            Contentful API via GraphQL.
          </Body>
          <MainBody>
            I currently most passion about:
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
          </MainBody>
          <MainBody>
            I’m always focused in developing my skills further, and use them to improve my coding
            skills.
          </MainBody>

          <MainBody>
            I have huge passion for cycling so when I am not in the office you can find me on road
            or gravel cycle lanes in Essex or Kent.
          </MainBody>

          <UL>
            <LI>
              <Link target="_blank" passHref href="mailto:jakub.gajewski@yahoo.com">
                <a>
                  <LargeMail />
                </a>
              </Link>
            </LI>
            <LI>
              <Link target="_blank" href="https://gitlab.com/JakubGajewski212" passHref>
                <a>
                  <Gitlab />
                </a>
              </Link>
            </LI>
            <LI>
              <Link target="_blank" href="https://github.com/jakubgajewskicode" passHref>
                <a>
                  <Github />
                </a>
              </Link>
            </LI>
            <LI>
              <Link target="_blank" href="https://www.linkedin.com/in/jacobgajewski/" passHref>
                <a>
                  <Linkdin />
                </a>
              </Link>
            </LI>
            <LI>
              <Link target="_blank" href="https://www.instagram.com/jacob.g.story/" passHref>
                <a>
                  <InstagramLarge />
                </a>
              </Link>
            </LI>

            <LI>
              <Link target="_blank" href="https://www.strava.com/athletes/13105170" passHref>
                <a>
                  <Strava />
                </a>
              </Link>
            </LI>
          </UL>
        </StyledBody>
      </RightItem>
      <LeftItem>
        <About />
      </LeftItem>
    </Main>
  );
};

export default AboutPage;
