import { useHistory } from "react-router";
import Container from "../../components/Container";
import { Button } from "../../components/Button";
import { UserContainer, UserInfoContainer } from "./styles";
import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import EditUserModal from "../../components/EditUserModal";
import { useState, useContext, useEffect } from "react/cjs/react.development";
import { UserInfoContext } from "../../providers/UserInfo";

function Dashboard() {
  const { editUser, getHabitsList } = useContext(UserInfoContext);
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
  const name = localStorage.getItem("@KAF_userName");
  const [editUserModal, setEditUserModal] = useState(false);
  const [username, setUsername] = useState(name);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getHabitsList(), []);

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
          setUsername={setUsername}
        />
      )}
      <UserContainer>
        <Container height={"250px"}>
          <h2>{username}</h2>
          <Button onClick={() => setEditUserModal(true)}>Editar Perfil</Button>
        </Container>
        <UserInfoContainer>
          <Container
            width={"250px"}
            height={"400px"}
            onClick={() => history.push("/habits")}
          >
            <h2>Hábitos</h2>
          </Container>
          <Container
            width={"250px"}
            height={"400px"}
            onClick={() => history.push("/groups")}
          >
            <h2>Grupos</h2>
          </Container>
        </UserInfoContainer>
      </UserContainer>
      <UserFooter />
    </>
  );
}

export default Dashboard;
