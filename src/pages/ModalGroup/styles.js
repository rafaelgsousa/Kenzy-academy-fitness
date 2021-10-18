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
    z-index: 1;

    > div{
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        >div{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        > button:first-child{
            position: absolute;
            top: 5px;
            right: 5px;
            z-index: 2;
        }
    }
`

export const GroupButton = styled.div`

`
