import styled from "styled-components";

import img from "./../../assets/img/group.jpeg";

export const Box = styled.div`
  height: calc(100vh - 16px);
  width: calc(100vw - 16px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-family: "Roboto";
  > div {
    padding: 0 32px;
    box-sizing: border-box;
    position: relative;
    box-shadow: -7px 7px 4px rgba(255, 255, 255, 50%);
  }

  input {
    display: block;
    margin: 20px auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > button {
    font-size: 36px;
    position: absolute;
    bottom: 95px;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    font-size: 36px;
    position: absolute;
    bottom: 95px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 590px;
  height: 35px;
  display: block;
  margin: 50px auto 20px;
  text-align: center;
`;

export const Blur = styled.span`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: blur(3px);
`;

