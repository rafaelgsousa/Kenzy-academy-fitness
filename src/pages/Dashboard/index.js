import { useHistory } from "react-router";
import Container from "../../components/Container";
import { Button } from "../../components/Button";
import { UserContainer } from "./styles";
import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import EditUserModal from "../../components/EditUserModal";
import { useState, useContext } from "react/cjs/react.development";
import { UserInfoContext } from "../../providers/UserInfo";

function Dashboard() {
  const { editUser } = useContext(UserInfoContext);
  const history = useHistory();
  const token = localStorage.getItem("@KAF_userToken");
  const username = localStorage.getItem("@KAF_userName");
  const [editUserModal, setEditUserModal] = useState(false);

  if (!token) {
    history.push("/");
  }

  return (
    <>
      <UserHeader />
      {editUserModal && (
        <EditUserModal
          setEditUserModal={setEditUserModal}
          editUser={editUser}
        />
      )}
      <UserContainer>
        <Container height={"250px"}>
          <h2>{username}</h2>
          <Button onClick={() => setEditUserModal(true)}>Editar Perfil</Button>
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
