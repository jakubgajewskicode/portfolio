import Carousel from 'react-multi-carousel';
import Link from 'next/link';

import Bike from '../../public/Svgs/Bike-SVG.svg';

import Zarowka from '../../public/Pngs/Zarowka.png';

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
  Button,
  ButtonsWrap,
  RightArrow,
  LeftArrow
} from './ui';

const WorkPage = () => {
  return (
    <>
      <CarouselWrapper>
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          customRightArrow={<RightArrow />}
          customLeftArrow={<LeftArrow />}
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
                        implement updates to our current data tracking layer
                      </p>
                    </li>
                  </UL>
                  <p>Tech stack in which I am involved in:</p>
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
                  <H5>Current portofolio</H5>
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
                  <H5>Precise Weather App</H5>
                  <p> Current and hours forecast for next 3 days</p>
                  <UL>
                    <li>
                      Drag the map or choose city to get live weather update for current location
                    </li>
                    <li>Integrating two APIs together: Mapbox and Openweathermap</li>
                    <li>Using react-map-gl wrapper for Mapbox</li>
                    <li>Geocoder to process city locations</li>
                    <li>GeolocateControl to process client location</li>
                  </UL>
                  <ButtonsWrap>
                    <form>
                      <Button type="submit" formAction="/weather">
                        View Demo
                      </Button>
                    </form>
                    <form>
                      <Button
                        type="submit"
                        formAction="https://github.com/jakubgajewskicode/portfolio/blob/main/pages/weather/index.jsx">
                        View GitHub
                      </Button>
                    </form>
                  </ButtonsWrap>
                  <H5>Newsletter Blog</H5>
                  <UL>
                    <li>Contentful Headless CMS integreted with Gatsby build</li>
                  </UL>
                  <ButtonsWrap>
                    <form>
                      <Button type="submit" formAction="https://jakub-playground.vercel.app/">
                        View Demo
                      </Button>
                    </form>

                    <form>
                      <Button type="submit" formAction="https://github.com/jakubgajewskicode/blog">
                        View GitHub
                      </Button>
                    </form>
                  </ButtonsWrap>
                  <H5>Messenger App</H5>
                  <UL>
                    <li>React / Firebase</li>
                    <li>
                      Very Simple App showing how easy is to integrate serverless backend / Auth on
                      the front end side
                    </li>
                    <li>Auth with Google Provider</li>
                    <li>React Hooks</li>
                    <li>Styled Components</li>
                  </UL>
                  <ButtonsWrap>
                    <form>
                      <Button type="submit" formAction="/messenger">
                        View Demo
                      </Button>
                    </form>

                    <form>
                      <Button
                        type="submit"
                        formAction="https://github.com/jakubgajewskicode/portfolio/blob/main/pages/messenger/index.jsx">
                        View GitHub
                      </Button>
                    </form>
                  </ButtonsWrap>
                </StyledBody>
              </RightItem>
              <BulbWrap>
                <img src={Zarowka} alt="bulbimage" />
              </BulbWrap>
            </>
          </Main>
        </Carousel>
      </CarouselWrapper>
    </>
  );
};

export default WorkPage;
