import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import Container from "../../components/Container";
import {
  HabitsContent,
  HabitsListContainer,
  MainContent,
  ContainerContent,
} from "./styles";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import HabitsModal from "../../components/HabitsModal";
import EditHabitsModal from "../../components/EditHabitsModal";
import { useContext } from "react";
import { UserInfoContext } from "../../providers/UserInfo";
import { Card } from "../../components/Card";
import { ButtonX } from "../../components/ButtonX";
import { FiX } from "react-icons/fi";
import { useHistory } from "react-router";

function Habits() {
  const history = useHistory();
  const [habitsModal, setHabitsModal] = useState(false);
  const [editHabitsModal, setEditHabitsModal] = useState(false);
  const [habitId, setHabitId] = useState(0);
  const token = JSON.parse(localStorage.getItem("@KAF_userToken"));
  const { habitsList, deleteHabit, getHabitsList } =
    useContext(UserInfoContext);

  if (!token) {
    history.push("/");
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getHabitsList(), []);

  return (
    <MainContent>
      <UserHeader path={2} />
      <HabitsContent>
        {habitsModal && <HabitsModal setHabitsModal={setHabitsModal} />}
        {editHabitsModal && (
          <EditHabitsModal
            setEditHabitsModal={setEditHabitsModal}
            habitId={habitId}
          />
        )}
        <ContainerContent>
          <Container width={"80vw"} height={"70vh"}>
            <HabitsListContainer>
              {habitsList.map((elt, index) => {
                const {
                  achieved,
                  category,
                  difficulty,
                  frequency,
                  how_much_achieved,
                  title,
                  id,
                } = elt;
                return (
                  <Card
                    key={index}
                    width={"200px"}
                    height={"200px"}
                    position={
                      habitsModal || editHabitsModal ? "static" : "relative"
                    }
                    onClick={() => {
                      setEditHabitsModal(true);
                      setHabitId(id);
                    }}
                  >
                    {!habitsModal && !editHabitsModal && (
                      <ButtonX
                        onClick={(e) => {
                          deleteHabit(id);
                          e.stopPropagation();
                        }}
                      >
                        <FiX />
                      </ButtonX>
                    )}
                    <p>{title}</p>
                    <p>Categoria: {category}</p>
                    <p>Dificuldade: {difficulty}</p>
                    <p>Frequência: {frequency}</p>
                    <p>Alcançado: {achieved ? "Sim" : "Não"}</p>
                    <p>Quantidade: {how_much_achieved}</p>
                  </Card>
                );
              })}
            </HabitsListContainer>
            <Button onClick={() => setHabitsModal(true)}>Criar Hábito</Button>
          </Container>
        </ContainerContent>
      </HabitsContent>
      <UserFooter />
    </MainContent>
  );
}

export default Habits;
