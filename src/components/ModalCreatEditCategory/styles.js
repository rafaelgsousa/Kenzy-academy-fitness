import styled from "styled-components";

export const Blur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    filter: blur(10px);
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
    z-index: 20;

    > div{
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
        }
    }
`
