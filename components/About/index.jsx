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
  MainBody
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
          <Body>Hey, I am Jakub Gajewski.</Body>
          <MainBody>
            I am professional front end developer since January 2019. My passion for digital
            technology continually drives me to advance my skill set as a software developer. With
            an analytical mindset and strong communication and front end development skills, I
            thrive in environments where I can learn from others and develop my coding skills
            further.
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
