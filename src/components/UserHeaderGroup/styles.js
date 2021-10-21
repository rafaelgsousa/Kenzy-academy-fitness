import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 9vh;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const NavBar = styled.div`
  margin: 0 auto;
  margin-right: 0;
  width: 80vw;
  height: 6vh;
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
