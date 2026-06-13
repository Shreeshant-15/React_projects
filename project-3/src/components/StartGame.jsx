import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <img src="/images/dices.png" alt="Dice" />
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 400px;
`;