import styled from "styled-components";

export const Button = styled.button`
    width: ${ props => props.width || "120px" };
    height: ${ props => props.height || "30px" };
    background-color:${props=>props.cordefundo || "white"};
    color:${props=>props.textcolor || "black"};
    text-align: center;
    font-size: ${ props => props.size || "15px" };
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
`;