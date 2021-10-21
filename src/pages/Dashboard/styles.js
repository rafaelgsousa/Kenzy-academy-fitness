import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  h2,
  h3 {
    color: white;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  > div {
    &:hover {
      background: #ccc;
      cursor: pointer;
    }

    &:last-child {
      margin-left: 50px;
    }
  }
`;
