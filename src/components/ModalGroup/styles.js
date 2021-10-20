import styled from "styled-components";

import img from './../../assets/img/group.jpeg'

export const Blur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(3px);
`

export const Content = styled.div`
    height: calc(100vh - 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-family: 'Roboto';
    letter-spacing: 1.2px;
    font-weight: 300;
    z-index: 10;

    > div{
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        > div:first-of-type{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const GroupButton = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 2.5rem 0;
    display: flex;
    justify-content: space-around;
`

export const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`