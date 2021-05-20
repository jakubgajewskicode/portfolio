import styled from 'styled-components';

const Container = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 64%;
  height: 60vh;
  margin: auto;
  perspective: 1000px;
`;

const Card = styled.div`
  grid-column: 2 / span 2;
  border-radius: 30px;
  padding: 10px 20px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
`;

const Circle = styled.div`
  width: 90%;
  height: 50%;
  background: rgba(179, 65, 65, 0.2);
  position: absolute;
  top: 8%;
  left: 6%;
  border-radius: 50%;
  z-index: 1;
`;
const Bike = styled.div`
  display: flex;
  transition: all 0.75s ease-out;
  min-height: 35vh;
  align-items: center;
  justify-content: center;

  img {
    transition: all 0.75s ease-out;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
`;

const Info = styled.div`
  margin-top: 20px;
`;
const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  transition: all 0.75s ease-out;
`;
const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  transition: all 0.75s ease-out;

  button {
    padding: 5px 10px;
    background: none;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    cursor: pointer;
  }
`;
const PurchaseButton = styled.div`
  margin-top: 20px;
  transition: all 0.75s ease-out;

  button {
    padding: 5px 10px;
    background: none;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    width: 100%;
    cursor: pointer;
  }
`;

export { Container, Card, Bike, Circle, Info, Title, Sizes, PurchaseButton };
