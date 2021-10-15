import styled from "styled-components";

export const Input = styled.input`
    width: ${props => props.width || "175px"};
    height: ${ props => props.height || "30px" };
    text-align: center;
    font-size: ${ props => props.size || "15px" };
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
`;
