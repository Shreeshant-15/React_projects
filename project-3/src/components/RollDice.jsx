import styled from "styled-components";

const RollDice = () => {

        



  return (
    <DiceContainer>
        <div className="dice">
            <img src="/images/dice/dice_1.png" alt="dice 1" />
        </div>
        <p>
            Click an the dice to roll
        </p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
}

    p{
        font-size: 24px;
        }

`;