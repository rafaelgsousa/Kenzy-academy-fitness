import { useHistory } from "react-router";
import Container from "../../components/Container";
import { Button } from "../../components/Button";

function Dashboard() {
  //   const token = localStorage.getItem("@KAF_userToken");
  //   const history = useHistory();

  //   if (!token) {
  //     history.push("/");
  //   }

  return (
    <div className="dashBoardDiv">
      <Container>
        <h2>Nome do usuário</h2>
        <h3>Email</h3>
        <Button>Editar Perfil</Button>
      </Container>
      <Container>
        <h2>Hábitos</h2>
        <Button>Ver Hábitos</Button>
      </Container>
      <Container>
        <h2>Grupos</h2>
        <Button>Ver Grupos</Button>
      </Container>
    </div>
  );
}

export default Dashboard;
