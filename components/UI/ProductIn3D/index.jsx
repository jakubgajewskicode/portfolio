/* eslint-disable react/button-has-type */
import { useEffect, useRef } from 'react';

import {
  Container,
  Card,
  Bike,
  Circle,
  Info,
  Title,
  Sizes,
  PurchaseButton,
} from './ui';

import BikeImg from '../../../public/Pngs/5864f7c07d90850fc3ce2a0e.png';

const Productin3D = () => {
  const container = useRef();
  const card = useRef();
  const bike = useRef();
  const title = useRef();
  const sizes = useRef();
  const purchaseButton = useRef();

  useEffect(() => {
    container.current.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

      card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.current.addEventListener('mouseenter', () => {
      card.current.style.transition = 'none';

      title.current.style.transform = ` translateZ(100px)`;
      bike.current.style.transform = ` translateZ(150px) rotateZ(-10deg) `;
      sizes.current.style.transform = ` translateZ(100px)`;
      purchaseButton.current.style.transform = ` translateZ(100px)`;
    });
    container.current.addEventListener('mouseleave', () => {
      card.current.style.transition = 'all 1s ease';
      card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      title.current.style.transform = ` translateZ(0px)`;
      bike.current.style.transform = ` translateZ(0px)`;
      sizes.current.style.transform = ` translateZ(0px)`;
      purchaseButton.current.style.transform = ` translateZ(0px)`;
    });
  });

  return (
    <Container ref={container}>
      <Card ref={card}>
        <Bike>
          <Circle />
          <img ref={bike} src={BikeImg} alt="bike" />
        </Bike>
        <Info>
          <Title ref={title}>
            <h1>Sonic 3</h1> <h3>Best Bike Ever</h3>
          </Title>

          <Sizes ref={sizes}>
            <button>40</button>
            <button>45</button>
            <button>50</button>
            <button>55</button>
          </Sizes>
          <PurchaseButton ref={purchaseButton}>
            <button>Purchase</button>
          </PurchaseButton>
        </Info>
      </Card>
    </Container>
  );
};

export default Productin3D;
