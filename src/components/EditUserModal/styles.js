import styled from "styled-components";

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
`;

export const UserEditModal = styled.div`
  height: calc(100vh - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-family: "Roboto";
  letter-spacing: 1.2px;
  font-weight: 300;
  z-index: 1;
  > div {
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 300px;
    max-height: 300px;
  }
`;