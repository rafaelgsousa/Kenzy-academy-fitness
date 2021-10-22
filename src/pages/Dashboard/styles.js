import styled from "styled-components";

import img from "../../assets/img/dashboardBackground.jpg";

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

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: white;
  }

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    > button {
      :hover {
        cursor: pointer;
        box-shadow: 0 8px 32px 0 #007aff;
      }
    }
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;

  > div {
    &:hover {
      cursor: pointer;
      box-shadow: 0 8px 32px 0 #fff;
    }
  }
`;
