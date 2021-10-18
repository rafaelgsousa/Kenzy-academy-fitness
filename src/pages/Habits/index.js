import UserHeader from "../../components/UserHeader";
import UserFooter from "../../components/UserFooter";
import Container from "../../components/Container";
import { HabitsContent } from "./styles";

function Habits() {
  return (
    <>
      <UserHeader path={2} />
      <HabitsContent>
        <Container width={"80vw"} height={"70vh"} />
      </HabitsContent>
      <UserFooter />
    </>
  );
}

export default Habits;
