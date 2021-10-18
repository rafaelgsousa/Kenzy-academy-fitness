import styled from "styled-components"

export const Header = styled.header`

    width: ${props => props.width || "100%" };
    height: ${props => props.height || "100px"};
    position: ${props => props.position || "fixed"};
    top: ${props => props.top || "0px"};

`