import styled from 'styled-components'


/**
 * Example:
 * 
 * \<Card width={"200px"} height={"200px"} background={"red"} backgroundHover={"black"}\>
 * 
 * Default: 
 * 
 * width = 400px
 * 
 * height = 90px
 * 
 * background = white
 * 
 * backgroundHover = #ccc
 */
export const Card = styled.div`
    background: ${props => props.background || "#fff"};
    width: ${props => props.width || "400px"};
    height: ${props => props.height || "90px"};
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${props => props.margin || "12px"};
    cursor: pointer;
    position: relative;

    &:hover{
        background: ${props => props.backgroundHover || "#ccc"}
    }

    > button {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }
`

/**
 * Example:
 * 
 * \<TextCard fontSize={"14px"}\>Texto\</TextCard\>
 * 
 * Default:
 * 
 * font-size = 12px
 * 
 * color = black
 */
export const TextCard = styled.p`
    margin: 5px;
    font-size: ${props => props.fontSize || "12px"};
    color: ${props => props.color || "black"};
`