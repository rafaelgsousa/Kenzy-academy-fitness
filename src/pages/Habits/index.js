import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import Container from "../../components/Container";
import { HabitsContent } from "./styles";
import { Button } from "../../components/Button";
import { useState } from "react/cjs/react.development";
import HabitsModal from "../../components/HabitsModal";

function Habits() {
  const [habitsModal, setHabitsModal] = useState(false);

  return (
    <>
      <UserHeader path={2} />
      {habitsModal && <HabitsModal setHabitsModal={setHabitsModal} />}
      <HabitsContent>
        <Container width={"80vw"} height={"70vh"}>
          <Button onClick={() => setHabitsModal(true)}>Criar Hábito</Button>
        </Container>
      </HabitsContent>
      <UserFooter />
    </>
  );
}

export default Habits;
