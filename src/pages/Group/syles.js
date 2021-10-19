import styled from "styled-components";

export const Box = styled.div`
    height: 100vh;
    width: 100vw;
    background: lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-family: 'Roboto';

    > div {
        padding: 0 32px;
        box-sizing: border-box;
        position: relative;
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > button {
        font-size: 36px;
        position: absolute;
        bottom: 32px;
        cursor: pointer;
    }
`

export const Input = styled.input`
    width: 590px;
    height: 35px;
    display: block;
    margin: 0 auto 90px;
    text-align: center;
`