import styled from 'styled-components'


/**
 * Exemplo de uso:
 * 
 * \<Card width={200} height={200} background={"red"} backgroundHover={"black"}\>
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
    width: ${props => props.width ? `${props.width}px` : "400px"};
    height: ${props => props.height ? `${props.height}px` : "90px"};
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 12px;
    cursor: pointer;

    &:hover{
        background: ${props => props.backgroundHover || "#ccc"}
    }
`

/**
 * Exemplo de uso:
 * 
 * \<TextCard fontSize={14}\>Texto\</TextCard\>
 * 
 * valor default:
 * 
 * font-size = 12px
 * 
 * color = black
 */
export const TextCard = styled.p`
    margin: 5px;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "12px"};
    color: ${props => props.color || "black"};
`