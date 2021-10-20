import { Blur, UserEditModal } from "./styles";
import Container from "../Container";
import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonX } from "./../../components/ButtonX";
import { FiX } from "react-icons/fi";
import { useState } from "react/cjs/react.development";

function EditUserModal({ setEditUserModal, editUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Blur>
        <UserEditModal>
          <Container width={"50vw"} height={"60vh"} opacity={"1"}>
            <ButtonX onClick={() => setEditUserModal(false)}>
              <FiX />
            </ButtonX>
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={() => {
                const editInfo = {};
                if (name !== "") {
                  editInfo.username = name;
                }
                if (email !== "") {
                  editInfo.email = email;
                }
                if (password !== "") {
                  editInfo.password = password;
                }

                editUser(editInfo);

                setEditUserModal(false);
              }}
            >
              Salvar
            </Button>
          </Container>
        </UserEditModal>
      </Blur>
    </>
  );
}

export default EditUserModal;
