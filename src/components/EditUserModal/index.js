import { Blur, UserEditModal } from "./styles";
import Container from "../Container";
import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonX } from "./../../components/ButtonX";
import { FiX } from "react-icons/fi";

function EditUserModal() {
  return (
    <>
      <Blur />
      <UserEditModal>
        <Container width={"50vw"} height={"60vh"} opacity={"0.7"}>
          <ButtonX>
            <FiX />
          </ButtonX>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button>Salvar</Button>
        </Container>
      </UserEditModal>
    </>
  );
}

export default EditUserModal;
