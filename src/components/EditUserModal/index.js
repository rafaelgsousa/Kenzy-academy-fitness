import { Blur, UserEditModal } from "./styles";
import Container from "../Container";
import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonX } from "./../../components/ButtonX";
import { FiX } from "react-icons/fi";
import { useState } from "react";

function EditUserModal({ setEditUserModal, editUser, setUsername }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
            <Button
              onClick={() => {
                const editInfo = {};
                if (name) {
                  editInfo.username = name;
                }
                if (email) {
                  editInfo.email = email;
                }

                editUser(editInfo, setUsername);

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
