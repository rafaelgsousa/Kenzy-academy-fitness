import styled from 'styled-components'


/**
 * Exemplo de uso:
 * 
 * \<Card width={"200px"} height={"200px"} background={"red"} backgroundHover={"black"}\>
 * 
 * valor default: 
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
 * Exemplo de uso:
 * 
 * \<TextCard fontSize={"14px"}\>Texto\</TextCard\>
 * 
 * valor default:
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