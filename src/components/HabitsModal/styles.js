import styled from "styled-components";

export const HabitsEditModal = styled.div`
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
    max-width: 450px;
    max-height: 350px;
    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 70%;
    }
  }
`;

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;