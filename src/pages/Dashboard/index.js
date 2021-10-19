import { useHistory } from "react-router";
import Container from "../../components/Container";
import { Button } from "../../components/Button";
import { UserContainer } from "./styles";
import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";

function Dashboard() {
  const history = useHistory();
  //   const token = localStorage.getItem("@KAF_userToken");

  //   if (!token) {
  //     history.push("/");
  //   }

  return (
    <>
      <UserHeader />
      <UserContainer>
        <Container height={"250px"}>
          <h2>Nome do usuário</h2>
          <h3>Email</h3>
          <Button>Editar Perfil</Button>
        </Container>
        <Container width={"250px"} height={"400px"}>
          <h2>Hábitos</h2>
          <Button onClick={() => history.push("/habits")}>Ver Hábitos</Button>
        </Container>
        <Container width={"250px"} height={"400px"}>
          <h2>Grupos</h2>
          <Button onClick={() => history.push("/groups")}>Ver Grupos</Button>
        </Container>
      </UserContainer>
      <UserFooter />
    </>
  );
}

export default Dashboard;
