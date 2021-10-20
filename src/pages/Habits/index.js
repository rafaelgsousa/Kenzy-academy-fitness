import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import Container from "../../components/Container";
import { HabitsContent, HabitsListContainer } from "./styles";
import { Button } from "../../components/Button";
import { useState } from "react/cjs/react.development";
import HabitsEditModal from "../../components/HabitsEditModal";
import { useContext } from "react";
import { UserInfoContext } from "../../providers/UserInfo";
import { Card } from "../../components/Card";
import { ButtonX } from "../../components/ButtonX";
import { FiX } from "react-icons/fi";

function Habits() {
  const [habitsModal, setHabitsModal] = useState(false);
  const { habitsList, deleteHabit } = useContext(UserInfoContext);

  return (
    <>
      <UserHeader path={2} />
      {habitsModal && <HabitsEditModal setHabitsModal={setHabitsModal} />}
      <HabitsContent>
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
                <Card key={index} width={"200px"} height={"200px"}>
                  <ButtonX onClick={() => deleteHabit(id)}>
                    <FiX />
                  </ButtonX>
                  <p>Título: {title}</p>
                  <p>Categoria: {category}</p>
                  <p>Dificuldade: {difficulty}</p>
                  <p>Frequência: {frequency}</p>
                  <p>Alcançado: {achieved ? "Sim" : "Não"}</p>
                  <p>Quantidade Alcançada: {how_much_achieved}</p>
                </Card>
              );
            })}
          </HabitsListContainer>
          <Button onClick={() => setHabitsModal(true)}>Criar Hábito</Button>
        </Container>
      </HabitsContent>
      <UserFooter />
    </>
  );
}

export default Habits;
