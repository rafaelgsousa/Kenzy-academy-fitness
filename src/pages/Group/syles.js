import styled from "styled-components";
import img from './../../assets/img/group.jpeg'

export const Box = styled.div`
    height: calc(100vh - 16px);
    width: calc(100vw - 16px);
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
`