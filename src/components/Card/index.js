import styled from "styled-components";

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
  background: ${(props) => props.background || "#fff"};
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.height || "90px"};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${(props) => props.margin || "12px"};
  cursor: pointer;
  position: ${(props) => props.position || "relative"};
  font-size: ${props=>props.size || "20px"};

  &:hover {
    background: ${(props) => props.backgroundHover || "#ccc"};
  }
`;

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
  font-size: ${(props) => props.fontSize || "18px"};
  color: ${(props) => props.color || "black"};
`;
