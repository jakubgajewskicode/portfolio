import Link from 'next/link';

import About from '../../public/Svgs/About.svg';
import Gitlab from '../../public/Svgs/GitLab.svg';
import Github from '../../public/Svgs/Github.svg';
import LargeMail from '../../public/Svgs/LargeMail.svg';
import Strava from '../../public/Svgs/Strava.svg';
import Linkdin from '../../public/Svgs/LargeLinkdin.svg';
import InstagramLarge from '../../public/Svgs/instagramLarge.svg';

import { Main, LeftItem, RightItem, StyledHeader, H5, H1, Body, StyledBody, UL, LI } from './ui';

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
            Currently working full time on Rapha&apos;s Racing front end new e-commerce project.
            Starting from designs systems and creating mobile first UI to engineering part which
            means integrating them into our data structure: AWS, Contentful API via GraphQL.
          </Body>

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
