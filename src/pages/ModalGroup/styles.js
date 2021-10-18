import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    font-family: 'Roboto';
    letter-spacing: 1.2px;
    font-weight: 300;

    > div{
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        >div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const GroupButton = styled.div`

`
