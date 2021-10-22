import styled from "styled-components"

export const Footer = styled.footer`

    width: ${props => props.width || "100%" };
    height: ${props => props.height || "100px"};
    position: ${props => props.position || "fixed"};
    bottom: ${props => props.bottom || "0px"};
    background-color: ${props => props.backgroundColor || "white"}

`