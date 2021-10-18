import styled from "styled-components";

//exemplo para chamar as props
// <UserFooter width={"200px"}/>

//as props sao apenas 3
//sendo elas width, height e background-color

const UserFooter = styled.div`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "10vh"};
  background-color: ${(props) => props.color || "#007AFF"};
`;

export default UserFooter;
