import { useHistory } from "react-router";
import Container from "../../components/Container";
// import { Button } from "../../components/Button";
import { UserContainer, UserInfoContainer, MainContent } from "./styles";
import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import EditUserModal from "../../components/EditUserModal";
import { useState, useContext, useEffect } from "react";
import { UserInfoContext } from "../../providers/UserInfo";
import habitsImg from "../../assets/img/habitsImage.jpg";
import groupsImg from "../../assets/img/groupsImage.webp";
import profileImg from "../../assets/img/profileImage.jpg";

function Dashboard() {
  const [editUserModal, setEditUserModal] = useState(false);
  const [name, setName] = useState("");
  const { editUser, getHabitsList, getUser } = useContext(UserInfoContext);
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("@KAF_userToken"));

  useEffect(() => {
    getHabitsList();
    getUser(setName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    history.push("/");
  }

  return (
    <MainContent>
      <UserHeader path={1} />
      {editUserModal && (
        <EditUserModal
          setEditUserModal={setEditUserModal}
          editUser={editUser}
        />
      )}
      <UserContainer>
        <UserInfoContainer>
          <Container
            width={"400px"}
            height={"400px"}
            onClick={() => history.push("/habits")}
            img={habitsImg}
          >
            <h2 style={{backgroundColor:"white",padding:"10px",color:"black",fontSize:"30px"}}>Hábitos</h2>
          </Container>
        </UserInfoContainer>

        <Container 
        img={profileImg} 
        width={"400px"}
        height={"400px"}>
          {/* <h2 style={{backgroundColor:"white",padding:"10px",color:"black",fontSize:"30px"}}>{name}</h2> */}
          <h2 onClick={() => setEditUserModal(true)} 
          style={{backgroundColor:"white",
          padding:"10px",color:"black",
          fontSize:"30px",
          cursor:"pointer"}}>Editar Perfil</h2>
          {/* <Button onClick={() => setEditUserModal(true)}>Editar Perfil</Button> */}
        </Container>

        <UserInfoContainer>
          <Container
            width={"400px"}
            height={"400px"}
            onClick={() => history.push("/groups")}
            img={groupsImg}
          >
            <h2 style={{backgroundColor:"white",padding:"10px",color:"black",fontSize:"30px"}}>Grupos</h2>
          </Container>
        </UserInfoContainer>
      </UserContainer>
      <UserFooter />
    </MainContent>
  );
}

export default Dashboard;