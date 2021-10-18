import styled from "styled-components";

/**
 * example:
 * 
 * <ButtonX width={"30px"} height={"30px"}>
 *    <FiX/>
 * </Button>
 * 
 * Default:
 * 
 * width = "20px" 
 * height = "20px"
 */

export const ButtonX = styled.button`
    padding: 0;
    border: none;
    background: transparent;
    width: ${props => props.width || "20px"};
    height: ${props => props.height || "20px"};
    cursor: pointer;

    svg {
        height: 100%;
        width: 100%;
    }
`