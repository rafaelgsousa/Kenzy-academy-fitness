import Container from "../Container";
import { Blur } from "../EditUserModal/styles";
import { ButtonX } from "../ButtonX";
import { FiX } from "react-icons/fi";
import { GroupButton, CheckBoxLabel, HabitsEditModal } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import { UserInfoContext } from "../../providers/UserInfo";

function HabitsModal({ setHabitsModal }) {
  const [achieved, setAchieved] = useState(false);
  const user = JSON.parse(localStorage.getItem("@KAF_userId"));
  const { createHabit } = useContext(UserInfoContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo Obrigatório"),
    frequency: yup.string().required("Campo Obrigatório"),
    how_much_achieved: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    data.achieved = achieved;
    data.user = user;
    createHabit(data);
  };

  return (
    <Blur>
      <HabitsEditModal>
        <Container width={"50vw"} height={"60vh"} opacity={"1"}>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <ButtonX onClick={() => setHabitsModal(false)}>
              <FiX />
            </ButtonX>
            <Input placeholder="Título" {...register("title")} />
            {errors.title?.message}
            <Input placeholder="Categoria" {...register("category")} />
            {errors.category?.message}
            <GroupButton>
              <Input placeholder="Dificuldade" {...register("difficulty")} />
              {errors.difficulty?.message}
              <Input placeholder="Frequência" {...register("frequency")} />
              {errors.frequency?.message}
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
                {...register("how_much_achieved")}
              />
              {errors.how_much_achieved?.message}
            </GroupButton>
            <Button type="submit">Criar</Button>
          </form>
        </Container>
      </HabitsEditModal>
    </Blur>
  );
}

export default HabitsModal;
