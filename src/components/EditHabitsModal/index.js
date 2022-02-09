import Container from "../Container";
import { Blur } from "../EditUserModal/styles";
import { ButtonX } from "../ButtonX";
import { FiX } from "react-icons/fi";
import {
  GroupButton,
  CheckBoxLabel,
  HabitsEditModal,
} from "../HabitsModal/styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState, useContext } from "react";
import { UserInfoContext } from "../../providers/UserInfo";

function EditHabitsModal({ setEditHabitsModal, habitId }) {
  const [achieved, setAchieved] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [frequency, setFrequency] = useState("");
  const [how_much_achieved, setHow_much_achieved] = useState(0);
  const { editHabit } = useContext(UserInfoContext);

  const onSubmitFunction = () => {
    const newHabit = {};
    newHabit.achieved = achieved;
    if (title) {
      newHabit.title = title;
    }
    if (category) {
      newHabit.category = category;
    }
    if (difficulty) {
      newHabit.difficulty = difficulty;
    }
    if (frequency) {
      newHabit.frequency = frequency;
    }
    if (how_much_achieved) {
      newHabit.how_much_achieved = how_much_achieved;
    }
    editHabit(habitId, newHabit);
  };

  return (
    <Blur>
      <HabitsEditModal>
        <Container width={"50vw"} height={"50vh"} opacity={"1"}>
          <ButtonX onClick={() => setEditHabitsModal(false)}>
            <FiX />
          </ButtonX>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitFunction();
            }}
          >
            <h2>Editar Habito</h2>
            <Input
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <GroupButton>
              <Input
                placeholder="Dificuldade"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              />
              <Input
                placeholder="Frequência"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              />
            </GroupButton>
            <GroupButton>
              <CheckBoxLabel>
                <label>Alcançado</label>
                <Input
                  type="checkbox"
                  onChange={(_) => setAchieved(!achieved)}
                />
              </CheckBoxLabel>
              <Input
                placeholder="Quantidade Alcançada"
                type="number"
                value={how_much_achieved}
                onChange={(e) => setHow_much_achieved(e.target.value)}
              />
            </GroupButton>
            <Button type="submit">Editar</Button>
          </form>
        </Container>
      </HabitsEditModal>
    </Blur>
  );
}

export default EditHabitsModal;
