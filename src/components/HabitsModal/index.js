import Container from "../Container";
import { Blur, UserEditModal } from "../EditUserModal/styles";
import { ButtonX } from "./../../components/ButtonX";
import { FiX } from "react-icons/fi";
import { GroupButton } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

function HabitsModal({ setHabitsModal }) {
  return (
    <Blur>
      <UserEditModal>
        <Container width={"50vw"} height={"60vh"} opacity={"1"}>
          <ButtonX onClick={() => setHabitsModal(false)}>
            <FiX />
          </ButtonX>
          <Input />
          <Input />
          <GroupButton>
            <Input />
            <Input />
          </GroupButton>
          <GroupButton>
            <Input type="checkbox" />
            <Input />
          </GroupButton>
          <Button>Criar</Button>
        </Container>
      </UserEditModal>
    </Blur>
  );
}

export default HabitsModal;
