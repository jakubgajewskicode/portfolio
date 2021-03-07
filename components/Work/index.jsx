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
  Body,
  StyledBody,
  CarouselWrapper,
  BulbWrap,
  StyledAnchor2,
  StyledTitle,
  StyledAnchor
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
                    <br /> Rapha is a e-commerce platform with the world’s finest cycling clothing I
                    ever experienced. Our mission is to make cycling the most popular sport in the
                    world.
                    <br />
                  </StyledTitle>
                  <Body>
                    Current goal as a tech team is to create new e-commerce platform based on modern
                    serverless approach.
                  </Body>
                  <Body>
                    As a front end developer I am responsible for:
                    <ul>
                      <li>
                        Working closely with designer and other talented developers on building up
                        from scratch new UI
                      </li>
                      <Link passHref href="https://www.npmjs.com/package/@rapharacing/rapha-ui">
                        <StyledAnchor>npm rapha-ui</StyledAnchor>
                      </Link>
                      <li>
                        Creating GraphQL schemas and integrating our CMS Contentful data with our
                        Components via Apollo
                      </li>
                      <li>Testing components with Jest</li>
                      <li>Accessibility Audits</li>
                      <li>
                        Beside main project I have been working with third party GTM agency to
                        implement updates to our current data tracing layer
                      </li>
                    </ul>
                  </Body>
                  <Body>
                    Tech stack in which highly involved in:
                    <ul>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Typescript</li>
                      <li>GraphQL</li>
                      <li>Contentful</li>
                      <li>Storybook</li>
                    </ul>
                  </Body>
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
                  <Body>
                    Current portofolio website
                    <ul>
                      <li>React on Next.js. Server-side rendered</li>
                      <li>Design by Myself</li>
                      <li>Font - Lato</li>
                      <li>CSS - Styled Components</li>
                      <li>
                        Ilustrations by&nbsp;
                        <Link passHref href="https://absurd.design/">
                          <StyledAnchor>Absurd Design</StyledAnchor>
                        </Link>
                      </li>
                    </ul>
                  </Body>
                  <Body>
                    <Link passHref href="https://jakub-playground.vercel.app/">
                      <StyledAnchor>Newsletter Blog</StyledAnchor>
                    </Link>
                    <ul>
                      <li>Contentful CMS with Gatsby build</li>
                    </ul>
                  </Body>
                  <Body>
                    Messenger App
                    <ul>
                      <li>React / Firebase</li>
                    </ul>
                  </Body>
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
