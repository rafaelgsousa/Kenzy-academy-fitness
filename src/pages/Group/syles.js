import styled from "styled-components";

export const Box = styled.div`
    height: 100vh;
    width: 100vw;
    background: lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

    > div {
        padding: 0 32px;
        box-sizing: border-box;
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`