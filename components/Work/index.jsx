import Carousel from 'react-multi-carousel';
import Link from 'next/link';

import PropTypes from 'prop-types';

import Bike from '../../public/Svgs/Bike-SVG.svg';
import Bulb from '../../public/Svgs/AboutBulb2.svg';

import {
  Main,
  LeftItem,
  RightItem,
  StyledHeader,
  H5,
  H1,
  StyledBody,
  CarouselWrapper,
  BulbWrap,
  StyledAnchor2,
  StyledTitle,
  UL,
  StyledAnchor3,
  StyledP
} from './ui';

const WorkPage = ({ barState }) => {
  return (
    <>
      <CarouselWrapper>
        <Carousel
          additionalTransfrom={0}
          arrows={!barState}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 1
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 1
            }
          }}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          <Main>
            <>
              <RightItem>
                <StyledHeader>
                  <H5>new e-commerce</H5>
                  <H1>
                    <Link passHref href="https://www.rapha.cc/">
                      <StyledAnchor2>Rapha Racing</StyledAnchor2>
                    </Link>
                  </H1>
                </StyledHeader>
                <StyledBody>
                  <StyledTitle>
                    <p>
                      <Link passHref href="https://www.rapha.cc/">
                        <StyledAnchor3>Rapha</StyledAnchor3>
                      </Link>
                      &nbsp;is e-commerce platform with the world’s finest cycling clothing I ever
                      experienced. Our mission is to make cycling the most popular sport in the
                      world.
                    </p>
                  </StyledTitle>
                  <p>
                    Current goal as a tech team is to create new e-commerce platform based on modern
                    serverless approach. As a front end developer I am responsible for:
                  </p>
                  <UL>
                    <li>
                      <p>
                        Working closely with designer and other talented developers on building up
                        new UI from scratch.
                      </p>
                    </li>
                    <Link passHref href="https://www.npmjs.com/package/@rapharacing/rapha-ui">
                      <StyledAnchor3>npm rapha-ui</StyledAnchor3>
                    </Link>
                    <li>
                      <p>
                        Creating GraphQL schemas and integrating our CMS Contentful data with our
                        Components via Apollo
                      </p>
                    </li>
                    <li>
                      <p>Testing components with Jest</p>
                    </li>
                    <li>
                      <p>Accessibility Audits</p>
                    </li>
                    <li>
                      <p>
                        Beside main project I have been working with third party GTM agency to
                        implement updates to our current data tracing layer
                      </p>
                    </li>
                  </UL>
                  <p>Tech stack in which highly involved in:</p>
                  <UL>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>GraphQL</li>
                    <li>Contentful</li>
                    <li>Storybook</li>
                  </UL>
                </StyledBody>
              </RightItem>
              <LeftItem>
                <Bike />
              </LeftItem>
            </>
          </Main>
          <Main>
            <>
              <RightItem>
                <StyledHeader>
                  <H5>side projects</H5>
                  <H1>Apps</H1>
                </StyledHeader>
                <StyledBody>
                  <p>Current portofolio website</p>
                  <UL>
                    <li>React on Next.js. Server-side rendered</li>
                    <li>Design by Myself</li>
                    <li>Font - Lato</li>
                    <li>CSS - Styled Components</li>
                    <li>
                      Ilustrations by&nbsp;
                      <Link passHref href="https://absurd.design/">
                        <StyledAnchor3>Absurd Design</StyledAnchor3>
                      </Link>
                    </li>
                  </UL>
                  <Link passHref href="https://jakub-playground.vercel.app/">
                    <div>
                      <StyledP>
                        <StyledAnchor3>Newsletter Blog</StyledAnchor3>
                      </StyledP>
                    </div>
                  </Link>
                  <UL>
                    <li>Contentful CMS with Gatsby build</li>
                  </UL>
                  <p>Messenger App</p>
                  <UL>
                    <li>React / Firebase</li>
                  </UL>
                </StyledBody>
              </RightItem>
              <BulbWrap>
                <Bulb />
              </BulbWrap>
            </>
          </Main>
        </Carousel>
      </CarouselWrapper>
    </>
  );
};

WorkPage.propTypes = {
  barState: PropTypes.bool
};

export default WorkPage;
