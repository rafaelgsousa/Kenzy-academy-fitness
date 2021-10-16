import styled from "styled-components";

// sempre colocar um valor ao chamar as props

// como por exemplo:
// <Container width={"200px"}.../>

// ao inves de:
// <Container width={"200"}.../>
// ou
// <Container width={200}.../>

// atualmente existem apenas 3 props
// sendo elas: width, height e opacity

// mas mais props podem ser acrescentadas
// e os valores default dessas props estao setados como
// 200px, 200px, 1.0 respectivamente

const Container = styled.div`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
  opacity: ${(props) => props.opacity || "1.0"};
  background-color: #007aff;
`;

export default Container;
