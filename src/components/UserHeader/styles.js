import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 9vh;
  position: relative;
`;

export const NavBar = styled.div`
  margin: 0 auto;
  margin-right: 0;
  width: 80vw;
  height: 7vh;
  background-color: white;
`;

export const GroupButton = styled.div`
  > button {
    border: none;
    &:hover {
      cursor: pointer;
      box-shadow: 0 8px 32px 0 #007aff;
    }
  }
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  right: 0;
  top: 4vh;
`;

export const Logo = styled.div`
  position: absolute;
  margin: 0 auto;
  margin-left: 5vw;
  width: 8vw;
  height: 8vw;
  background-color: white;
  > img {
    width: 100%;
    height: 100%;
  }
`;
