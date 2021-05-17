import Face from '../../public/Pngs/Face.png';
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
} from './ui';

const AboutPage = () => (
  <Main>
    <RightItem>
      <StyledHeader>
        <H5>about</H5>
        <H1>Front End Developer living in Hackney, London.</H1>
      </StyledHeader>
      <StyledBody>
        <Body>Hey, I am Jakub Gajewski.</Body>
        <MainBody>
          I am professional front end developer since January 2020. My passion
          for digital technology continually drives me to advance my skill set
          as a software developer. With an analytical mindset, strong
          communication and front end development skills, I thrive in
          environments where I can learn from others and develop my coding
          skills further.
        </MainBody>
        <MainBody>
          I have huge passion for cycling so when I am not in the office you can
          find me on road or gravel cycle lanes in Essex or Kent.
        </MainBody>
        <UL>
          <LI>
            <a
              target="_blank"
              href="mailto:jakub.gajewski@yahoo.com"
              rel="noreferrer"
            >
              <LargeMail />
            </a>
          </LI>
          <LI>
            <a
              target="_blank"
              href="https://gitlab.com/JakubGajewski212"
              rel="noreferrer"
            >
              <Gitlab />
            </a>
          </LI>
          <LI>
            <a
              target="_blank"
              href="https://github.com/jakubgajewskicode"
              rel="noreferrer"
            >
              <Github />
            </a>
          </LI>
          <LI>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jacobgajewski/"
              rel="noreferrer"
            >
              <Linkdin />
            </a>
          </LI>
          <LI>
            <a
              target="_blank"
              href="https://www.instagram.com/jacob.g.story/"
              rel="noreferrer"
            >
              <InstagramLarge />
            </a>
          </LI>

          <LI>
            <a
              target="_blank"
              href="https://www.strava.com/athletes/13105170"
              rel="noreferrer"
            >
              <Strava />
            </a>
          </LI>
        </UL>
      </StyledBody>
    </RightItem>
    <LeftItem>
      <img src={Face} alt="about face" />
    </LeftItem>
  </Main>
);

export default AboutPage;
