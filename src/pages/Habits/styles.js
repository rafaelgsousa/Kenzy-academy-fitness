import styled from "styled-components";
import img from "../../assets/img/habitsBackground.jpg";

export const MainContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerContent = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 1150px;
    > div {
      overflow: auto;
      height: 88%;
    }
  }
`;

export const HabitsContent = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HabitsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    height: 45%;
    > p {
      margin: 0;
    }
  }
`;
