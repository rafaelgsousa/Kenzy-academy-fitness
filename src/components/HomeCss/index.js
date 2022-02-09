import styled from "styled-components";

export const HomeCss = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  .container {
    background-color: #007aff;
    width: 100%;
    height: 95vh;
  }
  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  /* .images span {
    width: 100px;
    margin: 0 110px 0 130px;
  } */
  .images img {
    -webkit-box-shadow: 0px 3px 15px -5px rgba(0, 0, 0, 0.66);
    box-shadow: 0px 3px 15px -5px rgba(0, 0, 0, 0.66);
  }

  .nav {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 20px;
    top: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .nav nav {
    margin: 10px;
  }

  header {
    background-color: white;
    width: 100%;
    height: 150px;
    position: fixed;
    top: 0px;
  }
  .training p {
    transform: rotate(350deg);
    font-size: 50px;
    font-weight: bold;
    position: fixed;
    left: 300px;
    top: 5;
    margin: 0;
  }
  footer {
    background-color: white;
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0px;
  }
  .copyright {
    position: fixed;
    bottom: 0px;
    right: 37%;
    font-size: 13px;
  }
  .infoFooter {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .infoFooter p {
    margin: 30px 70px 0 70px;
  }
  button {
    border: none;
    background-color: #007aff;
    margin: 34px;
    color: white;
  }
  .buttons {
    position: fixed;
    right: 100px;
    top: 60px;
  }

  .brand {
    position: fixed;
  }
  .logo {
    position: fixed;
    left: 70px;
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 0px 3px 15px -5px rgba(0, 0, 0, 0.66);
    box-shadow: 0px 3px 15px -5px rgba(0, 0, 0, 0.66);
    cursor: pointer;
  }
  .logo p {
    position: fixed;

    top: 105px;
  }

  @media screen and (max-width: 768px) {
    header {
      background-color: white;
      width: 100%;
      height: 100px;
      position: fixed;
      top: 0px;
    }
    .training p {
      transform: rotate(350deg);
      font-size: 35px;
      font-weight: bold;
      position: fixed;
      left: 250px;
      top: 5;
      margin: 0;
    }
    footer {
      background-color: white;
      width: 100%;
      height: 100px;
      position: fixed;
      bottom: 0px;
    }
    .copyright {
      position: fixed;
      bottom: 0px;
      right: 34%;
      font-size: 11px;
    }
    .images {
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: fixed;
      top: 25%;
    }
    .images span {
      width: 100px;
      margin: 0 110px 0 130px;
    }
  }
`;
