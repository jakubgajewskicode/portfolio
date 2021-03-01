import Carousel from 'react-multi-carousel';

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
  BulbWrap
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
                  <H1>Rapha</H1>
                </StyledHeader>
                <StyledBody>
                  <Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi impedit odit
                    non, eos rerum magnam molestias sunt iusto maiores velit error nisi omnis vero
                    aut! Facilis debitis exercitationem culpa.
                  </Body>

                  <Body>
                    Tech stack in which I am hugly involved:
                    <ul>
                      <li>React</li>
                      <li>Next.js</li>
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
                  <H1>Co tutaj ?</H1>
                </StyledHeader>
                <StyledBody>
                  <Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi impedit odit
                    non, eos rerum magnam molestias sunt iusto maiores velit error nisi omnis vero
                    aut! Facilis debitis exercitationem culpa.
                  </Body>
                  <Body>
                    Tech stack in which I am hugly involved:
                    <ul>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>GraphQL</li>
                      <li>Contentful</li>
                      <li>Storybook</li>
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
